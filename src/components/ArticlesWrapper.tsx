export type childrenProps = { children: React.ReactNode };

export default function ArticlesWrapper({ children }: childrenProps) {
  return (
    <article className="w-full overflow-y-scroll px-[1px] pb-10 text-sm leading-5 xl:fixed xl:left-5 xl:top-[12vh] xl:h-[83vh] xl:w-[30%]">
      {children}
    </article>
  );
}
