import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://drive.google.com/file/d/1lGU61ANGO6HYc_OKt_zGAhKQ9k8uEU3h/view?usp=sharing"
        thumbnailSrc="/images/YT-Thumbnail.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://drive.google.com/file/d/1lGU61ANGO6HYc_OKt_zGAhKQ9k8uEU3h/view?usp=sharing"
        thumbnailSrc="/images/YT-Thumbnail.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
