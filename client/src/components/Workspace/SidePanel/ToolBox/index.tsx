import { TabPanel } from '@chakra-ui/react'
import Image from 'next/image'
import { Tool } from './Tool'

export interface ToolBoxProps {
  className?: string
}

export default function ToolBox({ className }: ToolBoxProps) {
  return (
    <TabPanel>
      <div className={`grid grid-cols-4 ${className}`}>
        <Tool name={'Cat'} icon={'/huh_cat.jpg'} />
        <Tool name={'Ryan'} icon={'/ryan.jpg'} />
        <Tool name={'Sales graph'} icon={'/sample_graph.jpg'} />
        <Tool name={'Michael - I am beyonce'} icon={'/i_am_beyonce.jpeg'} />
        <Tool name={'Jim peeking'} icon={'/jim_peeking.jpeg'} />
        <Tool name={'Michael Noooo'} icon={'/michel_noooo.jpg'} />
        <Tool name={'Stanley'} icon={'/stanley.jpg'} />
        <Tool name={'Dwight'} icon={'/dwight.jpg'} />
      </div>
    </TabPanel>
  )
}

export { Tool } from './Tool'
