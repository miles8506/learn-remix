import { Form, useNavigate } from '@remix-run/react'
import styled from './style/style.module.scss'
import BaseDialog from '~/components/base/Dialog'
import { useCallback, useState } from 'react'

export default function AddPage() {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()
  const handleClick = useCallback(() => {
    navigate('..')
    setIsOpen(prev => !prev)
  }, [navigate])

  return (
    <BaseDialog
      title='ADD TODO'
      isOpen={isOpen}
      handleClick={handleClick}
      clickBackdrop
    >
      <Form method='post'>
        <div className={styled.bottom}>
          <button className={styled.button}>click</button>
        </div>
      </Form>
    </BaseDialog>
  )
}
