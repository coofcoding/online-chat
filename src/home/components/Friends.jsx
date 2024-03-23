import { Contact } from './';

export const Friends = () => {
  return (
    <div className='flex flex-col gap-2 h-[70vh] overflow-y-scroll'>
      <Contact
        name="Lora Jean"
        photo="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png"
        isActive="true"
      />
      <Contact
        name="David Goggins"
        photo="https://cdn.outsideonline.com/wp-content/uploads/2018/12/27/david-goggins-log-lift_s.jpg"
      />
    </div>
  )
}
