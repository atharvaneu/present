import { TPage } from "@/shared/types";
import { TabPanel } from "@chakra-ui/tabs";
import { useSelector, useDispatch } from "react-redux";

import { focusPage } from "@/redux/editor/editorSlice";
export interface PreviewsProps {
  className?: string;
}

export function Previews({ className }: PreviewsProps) {
  const { pages } = useSelector((state: any) => state.editor);

  if (!pages.length) {
    return (
      <TabPanel>
        <p className="text-center">Add a slide!</p>
      </TabPanel>
    );
  }

  return (
    <TabPanel>
      {pages?.map((page: TPage) => {
        return <Thumbnail key={page.id} pageId={page.id} />;
      })}
    </TabPanel>
  );
}

interface ThumbnailProps {
  pageId: string;
  className?: string;
}

function Thumbnail({ className, pageId }: ThumbnailProps) {
  const dispatch = useDispatch();

  function handleThumbnailClick(e: any) {
    dispatch(focusPage(pageId));
  }

  return (
    <div
      onClick={handleThumbnailClick}
      className={`h-28 mb-4 rounded bg-slate-200 cursor-pointer hover:bg-slate-300 hover:border-2 border-slate-400 ${className}`}
    ></div>
  );
}
