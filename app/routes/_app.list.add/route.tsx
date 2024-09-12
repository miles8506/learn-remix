import { Form } from '@remix-run/react'
import styled from './style/style.module.scss'
import BaseDialog from '~/components/base/Dialog'
import { useState } from 'react'

export default function AddPage() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <BaseDialog
      title='ADD TODO'
      isOpen={isOpen}
      handleClick={setIsOpen}
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
