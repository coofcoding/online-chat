import { Avatar } from "flowbite-react";

export const HeaderChat = () => {
    return (
        <div className="pb-3 w-full">
            <div className="flex flex-wrap gap-2">
                <Avatar img="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_11368.png" rounded>
                    <div className="space-y-1 font-medium dark:text-white">
                        <div>Lora Jean</div>
                    </div>
                </Avatar>
            </div>
        </div>
    );
};
