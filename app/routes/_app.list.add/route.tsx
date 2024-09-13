import { Form, useNavigate } from '@remix-run/react'
import styled from './style/style.module.scss'
import BaseDialog from '~/components/base/Dialog'
import { useCallback, useState } from 'react'
import BaseButton from '~/components/base/Button'

export default function AddPage() {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(true)

  const handleClick = useCallback(() => {
    navigate('..')
    setIsOpen(prev => !prev)
  }, [navigate])

  return (
    <BaseDialog
      title='ADD TODO'
      isOpen={isOpen}
      handleClick={handleClick}
    >
      <Form method='post'>
        <div className={styled.bottom}>
          <BaseButton>
            Click
          </BaseButton>
        </div>
      </Form>
    </BaseDialog>
  )
}
