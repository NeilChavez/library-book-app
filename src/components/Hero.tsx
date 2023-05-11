interface Props {
  urlImage: string
  title: string
}

export const Hero: React.FC<Props> = ({ urlImage, title }) => {
  return (
    <section className="w-screen h-[80vh] relative">
      <img
        src={urlImage}
        alt={title}
        className="w-full h-full absolute object-cover"
      />
      <div className="custom-gradient-2 w-full h-full absolute"></div>
      <h2 className="text-6xl text-[#fff] z-10  relative top-1/2 m-auto max-w-2xl ">
        {title}
      </h2>
    </section>
  )
}
