export interface Article {
  id: string
  title: string
  category: string
  excerpt: string
  readTime: string
  image: string
  imageAlt: string
  content: string[]
}

export const articles: Article[] = [
  {
    id: 'consistency',
    title: 'The Quiet Power of Consistency',
    category: 'Growth',
    excerpt:
      'Grand gestures make headlines, but quiet consistency builds the life you actually want. The small things you do repeatedly matter far more than the extraordinary things you do once.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    imageAlt: 'A winding mountain path disappearing into morning mist',
    content: [
      'We live in a culture that celebrates breakthroughs, transformations and overnight successes. But the truth most people discover eventually is that the life they want is built in the margins — in the unremarkable mornings, the repetitive workouts, the daily pages written when no one is watching.',
      'Consistency is not glamorous. It does not trend on social media. It does not promise instant results or dramatic before-and-after stories. What it does is compound. A twenty-minute walk every day changes your body over months. A page of writing every evening becomes a manuscript in a year. A weekly conversation with someone you love becomes the foundation of a relationship that lasts decades.',
      'The difficulty with consistency is not effort — each individual action is small. The difficulty is patience. It means trusting a process you cannot yet see the results of. It means continuing when progress feels invisible.',
      'Consider what you want your life to look like in three years. Now ask yourself: what small action, repeated daily, would make that vision more likely? You probably already know the answer. The question is whether you are willing to do it on the days when it feels pointless.',
      'Start smaller than you think you need to. Make it so easy that skipping it feels harder than doing it. And when you miss a day — because you will — simply begin again without drama.',
      'Consistency is not about perfection. It is about direction. Small steps, taken repeatedly, in a direction that matters to you. That is enough.',
    ],
  },
  {
    id: 'attention',
    title: 'Why Your Attention Is Your Most Valuable Resource',
    category: 'Peace',
    excerpt:
      'In an age of infinite distractions, the ability to direct your attention intentionally might be the most important skill you can develop.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    imageAlt: 'A quiet desk with a journal, coffee, and warm morning light',
    content: [
      'Your attention is finite. Every day, you wake up with a limited supply of it, and the world is exceptionally skilled at taking it from you — one notification, one headline, one autoplay video at a time.',
      'Consider how much of your attention is given away without your conscious consent. The reflexive scroll through social media. The news cycle that demands urgency about events you cannot influence. The background noise of emails, messages and alerts that fragment your thinking into increasingly shallow pieces.',
      'Now consider what you could do with that attention if you reclaimed it. You could read deeply. You could listen to someone you love without glancing at your phone. You could work on something meaningful without interruption. You could sit quietly and notice how you actually feel.',
      'Protecting your attention is not about productivity hacks or digital minimalism as a lifestyle brand. It is about deciding what deserves your finite awareness and giving it fully.',
      'Start by noticing. For one day, simply observe where your attention goes. You do not need to change anything yet — just watch. Notice the pulls, the triggers, the moments when your mind shifts from one thing to another without your permission.',
      'Once you see the pattern, you can begin to make choices. Which inputs genuinely add value to your life? Which ones take more than they give? What would it feel like to spend an hour doing one thing — truly one thing — with your full attention?',
      'Your attention is not just a resource. It is, in a very real sense, your life. Where your attention goes, your experience follows.',
    ],
  },
  {
    id: 'solitude',
    title: 'Learning to Enjoy Your Own Company',
    category: 'Wellness',
    excerpt:
      'Solitude is not loneliness. It is the practice of being comfortable with yourself — and it might be one of the most underrated skills for a meaningful life.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80',
    imageAlt: 'A person sitting by a lake surrounded by mountains at dusk',
    content: [
      'There is a difference between being alone and being lonely. Loneliness is the feeling of disconnection — the sense that you are isolated when you do not want to be. Solitude, by contrast, is a choice. It is time spent with yourself, not because no one is available, but because you have decided that your own company is worth keeping.',
      'Many people find solitude uncomfortable. Without external stimulation — without the steady stream of conversation, entertainment or digital noise — they are left with themselves. And sometimes, the person they find there is someone they do not know very well.',
      'Learning to enjoy your own company is not about becoming a recluse or rejecting human connection. It is about building a relationship with yourself that does not depend entirely on other people for validation, entertainment or emotional regulation.',
      'Start with small intervals. Take a walk without headphones. Eat a meal without a screen in front of you. Sit in a park and do nothing for fifteen minutes. Notice what comes up — the restlessness, the urge to reach for your phone, the thoughts that surface when you stop trying to avoid them.',
      'Over time, these moments of solitude become something you look forward to. They become the space where your best ideas emerge, where you process your emotions honestly, where you reconnect with what genuinely matters to you.',
      'A person who is comfortable in their own company brings something valuable to every relationship: the ability to be present without needing the other person to fill a void.',
    ],
  },
  {
    id: 'fulfillment',
    title: 'The Difference Between Being Busy and Being Fulfilled',
    category: 'Work',
    excerpt:
      'Busyness has become a status symbol. But filling every hour does not mean you are building a life that matters.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80',
    imageAlt: 'An hourglass with sand flowing, placed near a window with soft light',
    content: [
      'When someone asks how you are, the most common answer in modern life is "busy." It has become a reflex — a way of signaling importance, productivity, relevance. But busyness and fulfillment are not the same thing, and confusing the two can lead to a life that feels full but somehow empty.',
      'Busyness is about volume. It is about the number of tasks completed, the meetings attended, the messages answered. It often feels urgent, but urgency is not the same as importance.',
      'Fulfillment is about alignment. It is the feeling that what you are doing connects to something you care about — that your effort has meaning beyond the simple fact of being occupied.',
      'Consider your typical week. How much of your activity is truly important? How much is reactive — responding to other people\'s priorities, putting out fires that should never have started, filling time because empty space feels uncomfortable?',
      'The most fulfilled people are not necessarily the busiest. They tend to do fewer things, but the things they do are chosen deliberately. They protect their time. They say no more often than they say yes. They understand that every commitment is a trade — and they choose their trades carefully.',
      'If you want to shift from busy to fulfilled, start by subtracting rather than adding. Instead of asking "what else can I fit in?" ask "what can I stop doing?" The space that opens up is where fulfillment lives.',
    ],
  },
  {
    id: 'uncertainty',
    title: 'How to Make Peace with Uncertainty',
    category: 'Resilience',
    excerpt:
      'Life will never give you the certainty you crave. Learning to move forward without guarantees is not a weakness — it is one of the bravest things you can do.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80',
    imageAlt: 'A foggy forest path with trees fading into soft morning light',
    content: [
      'We want certainty. We want to know that the decision we are making is the right one, that the path we are on leads somewhere good, that the future will cooperate with our plans. And life, with remarkable consistency, refuses to provide this.',
      'Uncertainty is not a flaw in the system. It is the system. Every meaningful decision you will ever make involves some degree of not knowing. Will this career change work out? Will this relationship last? Will this move to a new city be worth it? There are no guarantees, and the desire to eliminate all risk before acting is, in practice, a decision to remain still.',
      'Making peace with uncertainty does not mean being reckless. It does not mean ignoring risks or refusing to plan. It means accepting that no amount of analysis, preparation or worry can remove all unknowns — and choosing to act anyway.',
      'It means getting comfortable with sentences like "I do not know yet" and "I am figuring it out" and "I might be wrong." These are not admissions of failure. They are honest descriptions of what it means to be alive and growing.',
      'The people who navigate uncertainty well tend to share a few habits. They focus on what they can control. They take small, reversible steps rather than waiting for the perfect moment. They build resilience by accepting that some things will not go as planned — and that this is survivable.',
      'You do not need to see the entire staircase. You just need to take the next step.',
    ],
  },
  {
    id: 'starting-small',
    title: 'The Beauty of Starting Small',
    category: 'Growth',
    excerpt:
      'The most powerful changes in life rarely begin with grand gestures. They begin with one small decision, repeated quietly, until it becomes part of who you are.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    imageAlt: 'A small green seedling emerging from rich dark soil in soft light',
    content: [
      'There is a peculiar myth in our culture that meaningful change requires dramatic action — quitting your job, moving to a new country, overhauling your entire routine overnight. And while these moments do happen, they are not how most lasting change actually works.',
      'Most meaningful change starts so small that it barely registers. It starts with drinking one more glass of water. With walking around the block after dinner. With putting your phone in another room before bed. With writing three sentences before checking your email.',
      'The beauty of starting small is that it removes the barrier of resistance. When the action is tiny enough, you cannot talk yourself out of it. You cannot claim you do not have time. You cannot argue that you are not ready.',
      'And here is what happens: small actions, repeated consistently, create identity shifts. You stop being "someone who wants to exercise" and become "someone who exercises." The habit is no longer something you do — it becomes something you are.',
      'If you are at the beginning of something new — a skill, a habit, a creative project, a change in the way you live — resist the temptation to start big. Start so small that it feels almost embarrassing. Then show up again tomorrow.',
      'The beginning does not need to be impressive. It just needs to exist.',
    ],
  },
]
