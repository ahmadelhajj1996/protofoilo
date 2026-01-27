
function Container({children}) {
  return (
    <>
      <div className="p-2 sm:p-6 pt-28  md:pt-12 md:ms-[25%] lg:ms-[20%]  min-[1200px]:ms-[19%] z-40">
        <div className="flex flex-col gap-y-6 sm:gap-y-8   md:gap-y-10 lg:gap-y-12 px-2 md:px-6">{children}</div>
      </div>
    </>
  );
}

export default Container;
