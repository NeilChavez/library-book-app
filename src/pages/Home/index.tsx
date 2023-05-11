import { activities } from '../../consts'
import { Card } from '../../components/Card'
import { Hero } from '../../components/Hero'

export const Home: React.FC = () => {
  return (
    <main>
      <Hero
        urlImage="https://tcdvisitors.sirv.com/visittrinity/2023/02/BmCall-Long-Room-Shelves-1-Copy.jpg?cw=100.0000%25&ch=100.0000%25&scale.option=fill&w=1100&h=0"
        title="Enter a world of history & heritage"
      />
      <section className="grid grid-cols-fluid pt-12 gap-10 m-auto max-w-2xl">
        {activities.map((activity) => (
          <Card
            key={activity.title}
            isBook={false}
            image={activity.image}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </section>
    </main>
  )
}
