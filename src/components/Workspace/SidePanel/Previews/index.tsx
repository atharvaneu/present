import { TabPanel } from "@chakra-ui/tabs";

export interface PreviewsProps {
  className?: string;
}

export function Previews({ className }: PreviewsProps) {
  return (
    <TabPanel>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </TabPanel>
  );
}

interface ThumbnailProps {
  className?: string;
}

function Thumbnail({ className }: ThumbnailProps) {
  return <div className={`h-28 mb-4 rounded bg-slate-200 ${className}`}></div>;
}
