type PropsInfiniteTextSlider = {
  children: string;
};

export function InfiniteTextSlider(props: PropsInfiniteTextSlider) {
  return (
    <>
      <p className="slider__text">
        <span>{props.children}</span>
      </p>
      <p className="slider__text two">
        <span>{props.children}</span>
      </p>
    </>
  );
}
