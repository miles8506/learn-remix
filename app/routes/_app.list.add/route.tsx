import { Form } from '@remix-run/react'
import styled from './style.module.css'

export default function AddPage() {
  return (
    <dialog open>
      <Form method='post'>
        <h3 className={styled['add-title']}>ADD TODO</h3>
        <div className={styled.bottom}>
          <button className={styled.button}>click</button>
        </div>
      </Form>
    </dialog>
  )
}
