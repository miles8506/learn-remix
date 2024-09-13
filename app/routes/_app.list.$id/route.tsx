import { Form, useNavigate } from "@remix-run/react";
import { useCallback, useState } from "react";
import BaseButton from "~/components/base/Button";
import BaseDialog from "~/components/base/Dialog"

export default function TodoDetail() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true)
  
  const handleClick = useCallback(() => {
    navigate('..')
    setIsOpen(prev => !prev)
  }, [navigate])

  return (
    <BaseDialog
      title=""
      isOpen={isOpen}
      handleClick={handleClick}
    >
      <Form method="post">
        <BaseButton>
          click
        </BaseButton>
      </Form>
    </BaseDialog>
  )
}

export const loader = () => {
  return null
}
