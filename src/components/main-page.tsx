"use client";
import DidModal from '@/components/did-modal'
import { Web5Provider } from '@/context/Web5Context'
import MarkdownPage from './markdown-page';
import UploadImg from './upload-img';
export default function MainPage() {
  
  return (
    <>
      <div className="flex-grow bg-black p-8 overflow-y-auto">
        Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys Hello Guys
        {/* <MarkdownPage /> */}
        <UploadImg />

        <Web5Provider>

          <DidModal />
        </Web5Provider>
      </div>
    </>

  )
}
