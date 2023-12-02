import { TPage } from '@/shared/types'
import DisplayElement from './DisplayElement'

export interface DisplayPageProps {
  page: TPage
}

export default function DisplayPage({ page }: DisplayPageProps) {
  console.log(page)
  return (
    <div
      id="workarea"
      className={`w-3/4 relative rounded-sm mx-[45px] ${''}`}
      data-testid="editor"
    >
      {page?.elements.map((element) => (
        // <Resizable
        //   key={element.id}
        //   style={{
        //     position: 'absolute',
        //     top: element.position.y,
        //     left: element.position.x,
        //   }}
        //   defaultSize={{ width: element.width, height: element.height }}
        //   onResize={(e) => {
        //     handleResize(e, element)
        //   }}
        // >
        <DisplayElement key={element.id} element={element} />
        // </Resizable>
      ))}
      {/* <ContextMenu initSettings={contextMenuState} /> */}
    </div>
  )
}
