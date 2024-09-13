import { Form, useActionData, useNavigate, useNavigation, useParams } from "@remix-run/react";
import { useCallback, useMemo, useState } from "react";
import BaseButton from "~/components/base/Button";
import BaseDialog from "~/components/base/Dialog"
import BaseInput from "~/components/base/Input";

import styled from './style/main.module.scss'
import { FormType } from "~/enums";
import { TodoRequest } from "~/types";

interface IPropsType {
  mode: FormType
  payload?: TodoRequest
}

export default function TodoForm(props: IPropsType) {
  const { mode, payload } = props
  const params = useParams()
  const id = params.id

  const actionError = useActionData() as { message: string }

  const defaultValues = payload
    ? payload
    : {
      title: '',
      time: '',
      description: '',
      isDone: false
    }

  const navigation = useNavigation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true)
  
  const handleClick = useCallback(() => {
    navigate('..')
    setIsOpen(prev => !prev)
  }, [navigate])

  const isSubmitting = useMemo(() => navigation.state !== 'idle', [navigation.state])

  return (
    <BaseDialog
      title={mode === FormType.ADD ? 'ADD TODO' : id}
      isOpen={isOpen}
      handleClick={handleClick}
    >
      <Form
        method="post"
        className={styled.form}
        action={mode === FormType.ADD ? '/list/add' : `/list/${id}`}
      >
        <BaseInput
          type="text"
          required
          name="title"
          labelText="Title"
          htmlFor="title"
          getter={15}
          defaultValue={defaultValues.title}
        />
        <BaseInput
          type="date"
          required
          name="time"
          labelText="Time"
          htmlFor="time"
          getter={15}
          defaultValue={defaultValues.time === '' ? '' : defaultValues.time.slice(0, 10)}
        />
        <BaseInput
          type="text"
          labelText="Description"
          htmlFor="description"
          name="description"
          getter={15}
          defaultValue={defaultValues.description}
        />
        <BaseInput
          type="checkbox"
          labelText="Done"
          htmlFor="done"
          name="done"
          style={{ width: '20px', height: '20px' }}
          defaultChecked={defaultValues.isDone}
        />
        <ul className={styled.errors}>
          {
            actionError && Object.values(actionError).map(error => (
              <li key={error}>{error}</li>
            ))
          }
        </ul>
        <div className={styled.bottom}>
          <BaseButton variant="large">
            { isSubmitting ? 'Submitting...' : 'Submit' }
          </BaseButton>
        </div>
      </Form>
    </BaseDialog>
  )
}
