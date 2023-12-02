import Image from 'next/image'

import { TElement } from '@/shared/types'
import '../app.css'
import { useEffect, useState } from 'react'

export interface DisplayElementProps {
  element: TElement
}

export default function DisplayElement({ element }: DisplayElementProps) {
  const [initialTransition, setInitialTransition] = useState(false)

  const { id, icon, position, width, height, name, animation } = element
  const { x, y } = position

  useEffect(() => {
    // Triggering the transition after the component is mounted
    setInitialTransition(true)
  }, [])
  console.log(animation)
  return (
    <div
      style={{
        top: position.y,
        left: position.x,
        width,
        height,
        position: 'absolute',
        opacity: initialTransition ? 1 : 0,
        transition: `opacity ${animation.duration} ${animation.css}`,
      }}
      className={`hover:border absolute border-slate-800 border-dashed`}
    >
      {typeof icon === 'string' ? (
        <Image
          className="mx-auto text-xs"
          src={icon}
          alt="icon"
          width={parseInt(width.substring(0, width.length - 2))}
          height={parseInt(height.substring(0, height.length - 2))}
        />
      ) : (
        icon
      )}
    </div>
  )
}
