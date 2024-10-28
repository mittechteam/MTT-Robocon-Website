import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/wSTUU3cdqy8?si=-tRAb0iudtbYqtbg"
        thumbnailSrc="/images/thumbnail.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/wSTUU3cdqy8?si=-tRAb0iudtbYqtbg"
        thumbnailSrc="/images/thumbnail.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
