import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd'

import { TElement } from '@/shared/types'
import { addAnimation } from '@/redux/editor/editorSlice'

export interface ElementProps {
  element: TElement
  onLeftClick?: (event: any) => void
  onRightClick?: (event: any) => void
  className?: string
}

export function Element({
  element,
  onLeftClick,
  onRightClick,
  className,
}: ElementProps) {
  const dispath = useDispatch()

  const { id, icon, position, width, height, name } = element
  const { x, y } = position

  const [{ isDragging }, elementDrag, preview] = useDrag(
    () => ({
      type: 'TElement',
      item: element,
      collect: (monitor: DragSourceMonitor) => {
        return {
          isDragging: monitor.isDragging(),
        }
      },
      end(draggedItem, monitor) {
        // console.log(draggedItem)
      },
    }),
    [id, x, y, name],
  )

  const [, drop] = useDrop({
    accept: 'TAnimation',
    drop: (item) => {
      dispath(addAnimation({ item, id }))
    },
  })

  return (
    <div
      ref={(node) => elementDrag(drop(node))}
      style={{
        top: position.y,
        left: position.x,
        width,
        height,
      }}
      className={`hover:border border-slate-800 border-dashed ${className}`}
      onClick={onLeftClick}
      onContextMenu={onRightClick}
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
