export interface Story {
  id: string
  title: string
  subtitle: string
  date: string
  readTime: string
  coverImage: string
  coverImageAlt: string
  category: string
  excerpt: string
  body: string[]
  reflection: string
}

export const stories: Story[] = [
  {
    id: 'the-old-man-and-the-sea-of-stars',
    title: 'The Old Man and the Sea of Stars',
    subtitle: 'A story about letting go and finding peace in the unknown',
    date: '2026-10-06',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=85',
    coverImageAlt: 'A vast night sky filled with stars above snow-capped mountains',
    category: 'Peace',
    excerpt:
      'On the edge of a small coastal village, there lived an old man who had spent his entire life trying to count the stars. Every evening, he would climb the hill behind his house and begin again.',
    body: [
      'On the edge of a small coastal village, there lived an old man who had spent his entire life trying to count the stars. Every evening, as the sky turned from amber to indigo, he would climb the hill behind his house, unfold a worn blanket, and begin again.',
      'His neighbours thought he was eccentric. His children, long since grown and settled in distant cities, called him stubborn. "Father," they would say on their rare visits, "you cannot count the stars. It is impossible." He would smile gently and reply, "I know. But the trying is beautiful."',
      'For decades, this was his ritual. He kept notebooks filled with tally marks — hundreds of them, each page a testament to evenings spent looking upward. He never finished. He never came close. But something about the practice gave him a contentment that others could not understand.',
      'One evening, a young woman from the village climbed the hill to ask him why. She was going through a difficult time — a career that felt meaningless, a relationship that had ended, a growing sense that life was slipping through her fingers without her permission.',
      '"Why do you count them?" she asked, sitting beside him on the blanket. "You know you will never finish."',
      'The old man was quiet for a long time. Then he said, "When I was your age, I wanted answers. I wanted to know the meaning of my life, the purpose of my suffering, the reason I was here. I searched for years. I read every book I could find. I asked every wise person I met. And do you know what I discovered?"',
      'She shook her head.',
      '"That the searching was the answer. That the beauty of life is not in arriving at a destination but in the act of looking — really looking — at the world around you. I count the stars not because I will ever finish, but because the counting teaches me to pay attention. And attention, my dear, is the beginning of everything good."',
      'The young woman sat with him that evening and looked at the sky. She did not count. She simply watched. And for the first time in months, she felt something loosen inside her chest — a tightness she had been carrying without realising it.',
      'She visited him every week after that. Sometimes they talked. Often they did not. They simply sat on the hill and watched the sky change.',
      'Years later, long after the old man had passed, she would climb that same hill on difficult evenings. She never counted the stars either. But she understood, finally, what he had been trying to teach her: that some of the most important things in life cannot be completed, measured, or understood — only experienced.',
      'And that is enough.',
    ],
    reflection:
      'Not everything in life needs a conclusion. Sometimes the beauty is in the practice, the trying, the showing up — even when you know you will never finish.',
  },
  {
    id: 'the-gardener-who-planted-for-strangers',
    title: 'The Gardener Who Planted for Strangers',
    subtitle: 'A story about generosity without recognition',
    date: '2026-10-05',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85',
    coverImageAlt: 'A lush green garden with sunlight filtering through leaves and flowers',
    category: 'Kindness',
    excerpt:
      'In the centre of a quiet town stood a garden that no one had planted but everyone enjoyed. The flowers bloomed in every season, the fruit trees offered their harvest freely, and a small bench invited anyone who needed rest.',
    body: [
      'In the centre of a quiet town stood a garden that no one had planted but everyone enjoyed. The flowers bloomed in every season, the fruit trees offered their harvest freely, and a small bench beneath an old oak invited anyone who needed rest.',
      'The townspeople assumed the garden had always been there — a happy accident of nature, perhaps, or the work of some forgotten benefactor. They picked the fruit, sat beneath the trees, proposed to their lovers among the roses, and never thought to ask who tended it.',
      'But there was a gardener. Her name was Meera, and she arrived before dawn every morning, long before anyone was awake. She pruned, she watered, she replaced dying plants with new ones. She repaired the bench when it cracked. She cleared the paths when autumn covered them with leaves.',
      'No one knew it was her. She never told anyone. She had no sign, no plaque, no social media account documenting her work. When people complimented the garden in her presence, she simply smiled and said, "It is lovely, isn\'t it?"',
      'One day, a journalist came to the town to write a story about the mysterious garden. She interviewed dozens of residents. No one knew who maintained it. The journalist was fascinated.',
      'Eventually, through patient observation — arriving before dawn herself and waiting — she discovered Meera. "Why don\'t you tell anyone?" the journalist asked. "People would celebrate you. They would help. They would be grateful."',
      'Meera considered this. Then she said, "The garden is not for me. It is for them. The moment I put my name on it, it becomes about me — about recognition, about gratitude, about what I receive in return. But this garden works because it belongs to no one and everyone. People feel free here because they do not feel they owe anyone for it."',
      '"But doesn\'t it bother you?" the journalist pressed. "All this work, and no one knows?"',
      'Meera smiled — a warm, unhurried smile. "I know," she said. "Every morning, when I see someone sitting on that bench reading a book, or a child reaching up to pick a peach, or an old couple walking through the roses — I know. And that is more than enough."',
      'The journalist wrote her story. But she kept Meera\'s identity out of it. Some gifts, she decided, are more beautiful when they remain anonymous.',
    ],
    reflection:
      'The most generous acts are often the ones no one sees. Real kindness does not need an audience.',
  },
  {
    id: 'the-letter-that-arrived-forty-years-late',
    title: 'The Letter That Arrived Forty Years Late',
    subtitle: 'A story about forgiveness and the weight of words unsaid',
    date: '2026-10-04',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85',
    coverImageAlt: 'An old handwritten letter on aged paper with warm light',
    category: 'Forgiveness',
    excerpt:
      'When the letter arrived, Ravi did not recognise the handwriting. It was shaky, uncertain — the kind of script written by a hand that had once been steady but had been softened by decades of living.',
    body: [
      'When the letter arrived, Ravi did not recognise the handwriting. It was shaky, uncertain — the kind of script written by a hand that had once been steady but had been softened by decades of living.',
      'The envelope was addressed to him at his childhood home — a house he had left forty years ago. It had been forwarded three times before reaching him, each forwarding address crossed out and replaced with the next, like a map of his life\'s migrations.',
      'He opened it carefully. Inside was a single page, written in blue ink that had faded to the colour of the winter sky.',
      '"Dear Ravi," it began. "I am writing this letter knowing that it may never reach you, and knowing that even if it does, it may arrive too late. But some words need to be said even when the moment has passed, because the alternative — silence — is worse."',
      'Ravi sat down. His coffee grew cold. He read on.',
      '"Forty years ago, I said something to you that I have regretted every day since. I told you that you would amount to nothing. I told you that your dreams were foolish. I said it out of my own fear, my own disappointment, my own inability to be the father you deserved. But those are reasons, not excuses. There is no excuse for breaking your child\'s belief in themselves."',
      'Ravi\'s hands trembled. He had not spoken to his father in thirty-seven years.',
      '"I followed your life from a distance. I know you became a teacher. I know you married a woman named Priya. I know you have two daughters. I know you built the life I told you that you could not. And I want you to know that I was wrong — not just about your future, but about everything. You did not need my approval. You never did. But I am giving it to you now, forty years late, because I owe you at least that much."',
      'The letter continued: "I do not ask for your forgiveness. That would be asking too much. I only ask that you know this: I am proud of you. I have always been proud of you. And the greatest regret of my life is not the things I did, but the things I did not say when it mattered."',
      'It was signed simply: "Your father."',
      'Ravi stared at the letter for a very long time. Then he picked up his phone and dialled a number he had memorised but never called. It rang once, twice, three times.',
      'A woman\'s voice answered. "Hello?"',
      '"This is Ravi," he said. "I am looking for my father."',
      'There was a pause. Then, softly: "I\'m sorry. He passed away three months ago. He asked me to send that letter after he was gone. He was afraid you wouldn\'t read it if you knew it was from him while he was still alive."',
      'Ravi hung up. He read the letter again. And again. And then he did something he had not done in forty years. He cried — not for the father he had lost, but for the years they had both wasted being afraid.',
    ],
    reflection:
      'The words we leave unsaid have weight. Do not wait until it is too late to say the things that matter.',
  },
  {
    id: 'the-woman-who-walked-away',
    title: 'The Woman Who Walked Away',
    subtitle: 'A story about choosing yourself when the world says otherwise',
    date: '2026-10-03',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=85',
    coverImageAlt: 'A lone figure walking along a mountain path at golden hour',
    category: 'Courage',
    excerpt:
      'She had everything. The corner office. The apartment with a view. The relationship that looked perfect in photographs. And yet, every morning, she woke with a strange heaviness.',
    body: [
      'She had everything. The corner office with floor-to-ceiling windows. The apartment overlooking the river. The relationship that looked perfect in every photograph. The social calendar filled with events that important people attended. By every measure her world had taught her, she had succeeded.',
      'And yet, every morning, she woke with a strange heaviness — a feeling she could not name but could not ignore either. It was not sadness exactly. It was not exhaustion. It was something deeper and quieter: the slow, persistent feeling of living someone else\'s life.',
      'She tried to fix it the way she fixed everything — with effort, discipline and strategy. She optimised her mornings. She hired a therapist. She took up meditation, then dropped it when it did not produce results within two weeks. She read books about finding purpose and attended conferences about unlocking potential.',
      'Nothing worked. The heaviness remained.',
      'Then one Tuesday — an ordinary, unremarkable Tuesday — she walked into her office, looked at the view she had worked fifteen years to earn, and thought: "This is not mine."',
      'Not the office. Not the view. The life. The entire construction of achievements, expectations and obligations that she had been building since she was seventeen years old and someone told her what success was supposed to look like.',
      'She did not quit that day. She was not reckless. But she began a different kind of work — the slow, painful work of asking herself what she actually wanted, not what she had been trained to want.',
      'It took a year. She left the job. She left the apartment. She ended the relationship that had been beautiful on the surface but hollow underneath. She moved to a smaller city. She took a job that paid less but interested her more. She learned to cook. She adopted a dog. She started writing, badly at first, then less badly.',
      'People called her brave. She did not feel brave. She felt terrified most of the time. But she also felt something she had not felt in years: alive.',
      'The heaviness lifted. Not all at once. Not dramatically. But slowly, day by day, like morning fog burning off under a patient sun.',
      'Years later, someone asked her if she regretted walking away. She thought about it honestly. "I regret not doing it sooner," she said. "But I also know I could not have done it sooner. You have to be ready. And being ready is not the same as being unafraid."',
    ],
    reflection:
      'Sometimes the bravest thing you can do is admit that the life you have built is not the life you want — and give yourself permission to start again.',
  },
  {
    id: 'two-cups-of-tea',
    title: 'Two Cups of Tea',
    subtitle: 'A story about the conversations that change everything',
    date: '2026-10-02',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1200&q=85',
    coverImageAlt: 'Two cups of tea on a rustic wooden table in warm afternoon light',
    category: 'Connection',
    excerpt:
      'They met every Thursday afternoon at the same café. One was eighty-three. The other was twenty-six. They had nothing in common — and everything.',
    body: [
      'They met every Thursday afternoon at the same café. One was eighty-three. The other was twenty-six. They had nothing in common — except that they were both, in their own way, lost.',
      'Ananya was twenty-six and drowning in decisions. Which career to pursue. Whether to move abroad. Whether the person she was dating was the right one. Every choice felt enormous, irreversible, terrifying. She spent more time analysing her options than actually living her life.',
      'Mr. Das was eighty-three and had run out of decisions to make. His wife had passed. His children visited twice a year. His days were quiet and mostly identical. He came to the café because it was the only place where someone might say hello.',
      'They started talking by accident — she needed the salt, he had it — and somehow, that single exchange became a ritual. Every Thursday. Two cups of tea. One table by the window.',
      'She told him about her paralysing indecision. He told her about his quiet loneliness. She asked him what he would do differently if he could live his life again. He surprised her.',
      '"I would worry less about choosing correctly," he said, stirring his tea, "and more about choosing kindly — being kind to myself about the choices I made, even the wrong ones. Every wrong choice taught me something I needed to know. I just wish I had not punished myself so much for learning."',
      '"But how do you know when a choice is right?" she asked.',
      'He looked at her with eyes that held eight decades of experience. "You don\'t," he said simply. "That is the secret no one tells you. You never know. You just choose, and then you make the choice right by how you live with it."',
      'She thought about this for weeks. And slowly, she began to make decisions — not because she was certain, but because she understood, for the first time, that certainty was never coming.',
      'They continued meeting every Thursday for three years. When Mr. Das passed away peacefully one winter morning, Ananya found a note he had left for her at the café, given to the owner weeks before.',
      'It said: "Thank you for the Thursdays. You reminded an old man that he still had something to give. Go live your beautiful, uncertain life. It is the only one you have."',
      'She kept the note in her wallet for the rest of her life.',
    ],
    reflection:
      'The people who change your life are not always the ones you expect. Sometimes all it takes is two cups of tea and the willingness to listen.',
  },
]
