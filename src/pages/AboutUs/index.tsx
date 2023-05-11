import { Hero } from '../../components/Hero'

export const AboutUs: React.FC = () => {
  return (
    <>
      <Hero
        urlImage="https://tcdvisitors.sirv.com/visittrinity/2023/02/home-trinity-trails-desktop.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=1600&h=0"
        title="About us"
      />

      <div id="#about" className="flex gap-8 flex-col pt-20  m-auto max-w-2xl">
        <h2 className='text-5xl  '>About us, discover our library</h2>
        <p>
          Welcome to our library! Here, in the heart of our community, we take
          pride in providing a space for education, learning, and intellectual
          exploration.
        </p>
        <p>
          Since our library was founded in 1991, it has been a center of
          resources for students, scholars, and anyone interested in learning.
          Our collection of books and materials has grown steadily over the
          years, from a modest set of initial volumes to a vast selection that
          spans everything from fiction and poetry to textbooks and reference
          works.
        </p>
        <p>
          Throughout the years, our library has been a meeting place for members
          of the community, where events and programs for all ages have been
          held. We take pride in being a place where young people can learn to
          love reading, students can study and conduct research, and adults can
          immerse themselves in a world of ideas.
        </p>

        <p>
          In our library, we are also committed to using modern technologies to
          enhance the accessibility and ease of use of our resources. Our
          digital collection is constantly expanding, with e-books, audiobooks,
          and other electronic resources available to all members of the
          community.
        </p>
        <p>
          As a nonprofit institution, our library depends on the support and
          active participation of the community to continue to grow and evolve.
          We hope to remain a vibrant and welcoming place for all those who wish
          to learn and grow, now and in the future.
        </p>
      </div>
    </>
  )
}
