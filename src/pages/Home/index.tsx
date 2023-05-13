import { activities } from '../../consts'
import { Hero } from '../../components/Hero'
import { ActivityCard } from '../../components/ActivityCard'

export const Home: React.FC = () => {
  return (
    <main>
      <Hero
        urlImage="./src/assets/images/library-background.webp"
        title="Enter a world of history & heritage"
      />
      <section className="grid grid-cols-fluid pt-12 gap-10 m-auto max-w-2xl">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.title}
            image={activity.image}
            title={activity.title}
            paragraph={activity.description}
          />
        ))}
      </section>
    </main>
  )
}
