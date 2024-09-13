import { Form, useNavigate, useNavigation } from "@remix-run/react";
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
  id?: string
}

export default function TodoForm(props: IPropsType) {
  const { mode, payload, id } = props

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
      title={FormType.ADD ? 'ADD TODO' : id}
      isOpen={isOpen}
      handleClick={handleClick}
    >
      <Form
        method="post"
        className={styled.form}
        action={mode === FormType.ADD ? '/list/add' : '/list/$id'}
      >
        <BaseInput
          type="text"
          required
          labelText="Title"
          htmlFor="title"
          getter={15}
          defaultValue={defaultValues.title}
        />
        <BaseInput
          type="date"
          required
          labelText="Time"
          htmlFor="time"
          getter={15}
          defaultValue={defaultValues.time ? new Date(defaultValues.time).getUTCDate() : new Date().getUTCDate()}
        />
        <BaseInput
          type="text"
          required
          labelText="Description"
          htmlFor="description"
          getter={15}
          defaultValue={defaultValues.description}
        />
        <BaseInput
          type="checkbox"
          required
          labelText="Done"
          htmlFor="done"
          style={{ width: '20px', height: '20px' }}
          defaultChecked={defaultValues.isDone}
        />
        <div className={styled.bottom}>
          <BaseButton variant="large">
            { isSubmitting ? 'Submitting...' : 'Submit' }
          </BaseButton>
        </div>
      </Form>
    </BaseDialog>
  )
}
