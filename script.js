const quoteText = document.querySelector("#quote");
const quoteBtn = document.querySelector("#generate");

const quotes = {
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- Will Rogers": '"Don’t Let Yesterday Take Up Too Much Of Today."',
    "- Unknown": '"You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- Nelson Mandela": '"Education is the most powerful weapon which you can use to change the world."',
    "- Dr. A.P.J. Abdul Kalam": '"You have to dream before your dreams can come true."',
    "- Mahatma Gandhi": '"The journey of a thousand miles begins with a single step."',
    "- Dr. B.R. Ambedkar": '"If you don’t ask, you don’t get."',
    "- Booker T. Washington": '"Few things can help an individual more than to place responsibility on him, and to let him know that you trust him."',
    "- Dr. B.R. Ambedkar": '"Success is a journey, not a destination."',
    "- Jawaharlal Nehru": '"The only way to deal with this life meaningfully is to find one’s work, and once found, devote oneself to it."',
    "- Martin Luther King Jr": '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    "- Albert Einstein": '"Strive not to be a success, but rather to be of value."',
    "- Florence Nightingale": '"I attribute my success to this: I never gave or took any excuse."',
    "- Michael Jordan": '"I missed more than 9000 shots in my career. I lost almost 300 games. 26 times I been trusted to take the game winning shot and missed. I failed over and over and over again in my life. And that is why I succeed."',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- Swami Vivekananda": '"Arise, awake, and stop not until the goal is reached."',
    "- Swami Vivekananda": '"You cannot believe in God until you believe in yourself."',
    "- Mahatma Gandhi": '"The best way to find yourself is to lose yourself in the service of others."',
    "- Mahatma Gandhi": '"The future depends on what we do in the present."',
    "- Dr. A.P.J. Abdul Kalam": '"Success is not the key to happiness. Happiness is the key to success."',
    "- Jawaharlal Nehru": '"It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."',
    "- Jawaharlal Nehru": '"Don\'t watch the clock; do what it does. Keep going."',
    "- Ratan Tata": '"Take calculated risks. That is quite different from being rash."',
    "- Ratan Tata": '"No matter how hard the battle gets, you need to remain steady and calm in your belief."',
    "- Dr. A.P.J. Abdul Kalam": '"The purpose of education is to make good human beings with skill and expertise... Enlightened human beings can be created by teaching them the right values."',
    "- Dhirubhai Ambani": '"You see, I do not believe in taking the wrong route to success. For the reason that it brings no real success at all."',
    "- Narendra Modi": '"One must not wait for a perfect moment, one must make the moment perfect."',
    "- Dr. A.P.J. Abdul Kalam": '"You cannot change your future, but you can change your habits, and surely your habits will change your future."',
    "- Narendra Modi": '"Hard work is always the shortcut to success."',
    "- Swami Vivekananda": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "- Mahatma Gandhi": '"You must be the change you wish to see in the world."',
    "- Ratan Tata": '"Life is not measured by the number of breaths we take, but by the moments that take our breath away."',
    "- Mary Kom": '"You have to fight to reach your dream. You have to sacrifice and work hard for it."',
    "- Bhagat Singh": '"Life is like a coin. You can spend it any way you wish, but you can only spend it once."',
    "- Oscar Wilde": '"Be yourself; everyone else is already taken."',
    "- Dr. A.P.J. Abdul Kalam": '"If you want to shine like the sun, first burn like the sun."',
    "- Zig Ziglar": '"Your attitude, not your aptitude, will determine your altitude."',
    "- Jawaharlal Nehru": '"The only limit to our realization of tomorrow is our doubts of today."',
    "- Dr. Sarvepalli Radhakrishnan": '"Our aim should be to educate ourselves in all dimensions of life."',
    "- Henry David Thoreau": '"Go confidently in the direction of your dreams.  Live the life you have imagined."',
    "- Dr. Sarvepalli Radhakrishnan": '"Education is the movement from darkness to light."',
    "- Dhirubhai Ambani": '"There is no elevator to success. You have to take the stairs."',
    "- Narendra Modi": '"If you are working with determination, success is bound to come to you."',
    "- A.P.J. Abdul Kalam": '"A person who has self-confidence is a person who can change the world."',
    "- Mahatma Gandhi": '"Strength does not come from physical capacity. It comes from an indomitable will."',
    "- Audrey Hepburn": '"Nothing is impossible, the word itself says \'I’m possible\'. "',
    "- Vivekananda": '"Do not wait to strike till the iron is hot, but make it hot by striking."',
    "- Mahatma Gandhi": '"A nation’s culture resides in the hearts and in the soul of its people."',
    "- Mother Teresa": '"Life is a challenge, meet it."',
    "- Ratan Tata": '"A true warrior does not rise by defeating others; he rises by defeating his own self."',
    "- Mahatma Gandhi": '"An eye for an eye only ends up making the whole world blind."',
    "- Mark Twain": '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."',
    "- Mahatma Gandhi": '"Be the change that you wish to see in the world."',
    "- Winston Churchill": '"Courage is the first of human qualities because it is the quality which guarantees all others."',
    "- Narayana Murthy": '"Success is not just about making money; it’s about making a difference."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    "- Ratan Tata": '"Knowledge is the foundation of success."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Charles Swindoll": '"Life is 10% what happens to me and 90% of how I react to it."',
    "- Buddha": '"The mind is everything. What you think you become."',
    "- Chinese Proverb": '"The best time to plant a tree was 20 years ago. The second best time is now."',
    "- Woody Allen": '"Eighty percent of success is showing up."',
    "- Swami Vivekananda": "'All power is within you; you can do anything and everything.'",
    "- Rabindranath Tagore": "'Faith is the bird that feels the light when the dawn is still dark.'",
    "- Dr. A.P.J. Abdul Kalam": "'Excellence is a continuous process and not an accident.'",
    "- Sardar Patel": "'Manpower without unity is not a strength unless it is harmonized and united properly.'",
    "- Chanakya": "'Learn from the mistakes of others. You can’t live long enough to make them all yourself.'",
    "- Buddha": "'No matter how hard the past, you can always begin again.'",
    "- Mother Teresa": "'Spread love everywhere you go. Let no one ever come to you without leaving happier.'",
    "- Ratan Tata": "'Ups and downs in life are very important to keep us going, because a straight line even in an ECG means we are not alive.'",
    "- Vikram Sarabhai": "'He who can listen to the music in the midst of noise can achieve great things.'",
    "- Bhagat Singh": "'Revolution is an inalienable right of mankind. Freedom is an imperishable birthright of all.'",
    "- Steve Jobs": '"Your time is limited, so don’t waste it living someone else’s life."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Maya Angelou": '"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. "',
    "- Dr. A.P.J. Abdul Kalam": '"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Dr. A.P.J. Abdul Kalam": '"A person who never made a mistake never tried anything new."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
    "- Zig Ziglar": '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily."',
    "- Aristotle": '"There is only one way to avoid criticism: do nothing, say nothing, and be nothing"',
    "- Jesus": '"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."',
    "- Kabir": "'The river that flows in you also flows in me.'",
    "- Mahatma Gandhi": "'In a gentle way, you can shake the world.'",
    "- Swami Vivekananda": "'You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.'",
    "- Dr. A.P.J. Abdul Kalam": "'To succeed in your mission, you must have single-minded devotion to your goal.'",
    "- Mahatma Gandhi": "'An ounce of patience is worth more than a ton of preaching.'",
    "- Jawaharlal Nehru": "'Culture is the widening of the mind and of the spirit.'",
    "- Guru Nanak": "'Let no man in the world live in delusion. Without a Guru, none can cross over to the other shore.'",
    "- Sarojini Naidu": "'We want deeper sincerity of motive, a greater courage in speech, and earnestness in action.'",
    "- Dr. A.P.J. Abdul Kalam": "'Great dreams of great dreamers are always transcended.'",
    "- Ramanujan": "'An equation for me has no meaning unless it expresses a thought of God.'",
    "- Mother Teresa": "'If you want to change the world, go home and love your family.'",
    "- Kabir": "'Wherever you are is the entry point.'",
    "- Ratan Tata": "'None can destroy iron, but its own rust can. Likewise, none can destroy a person, but their own mindset can.'",
    "- Swami Vivekananda": "'Take risks in your life. If you win, you can lead. If you lose, you can guide.'",
    "- Mahatma Gandhi": "'Satisfaction lies in the effort, not in the attainment. Full effort is full victory.'",
    "- Sarojini Naidu": "'We want deeper sincerity of motive, a greater courage in speech, and earnestness in action.'",
    "- Buddha": "'You, yourself, as much as anybody in the entire universe, deserve your love and affection.'",
    "- Dr. A.P.J. Abdul Kalam": "'Climbing to the top demands strength, whether it is to the top of Mount Everest or to the top of your career.'",
    "- Kabir": "'The river that flows in you also flows in me.'",
    "- Guru Nanak": "'Let no man in the world live in delusion. Without a Guru, none can cross over to the other shore.'",
    "- Ralph Waldo Emerson": '"The only person you are destined to become is the person you decide to be."',
    "- Erma Bombeck": '"When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me."',
    "- Swami Vivekananda": "'Truth can be stated in a thousand different ways, yet each one can be true.'",
    "- Sarojini Naidu": "'Awake, arise and educate, smash traditions, liberate.'",
    "- Mahatma Gandhi": "'There is more to life than simply increasing its speed.'",
    "- Ratan Tata": "'If you want to walk fast, walk alone. But if you want to walk far, walk together.'",
    "- Mother Teresa": "'Do not wait for leaders; do it alone, person to person.'",
    "- Swami Vivekananda": "'Do one thing at a time, and while doing it put your whole soul into it to the exclusion of all else.'",
    "- Sardar Patel": "'Take to the path of dharma – the path of truth and justice. Don’t misuse your strength.'",
    "- Dr. A.P.J. Abdul Kalam": "'Let us sacrifice our today so that our children can have a better tomorrow.'",
    "- Rabindranath Tagore": "'Let me not pray to be sheltered from dangers, but to be fearless in facing them.'",
    "- Bhagat Singh": "'Merciless criticism and independent thinking are the two necessary traits of revolutionary thinking.'",
    "- Chanakya": "'Before you start some work, always ask yourself three questions – Why am I doing it, What the results might be, and Will I be successful. Only when you think deeply and find satisfactory answers to these questions, go ahead.'",
    "- Swami Vivekananda": "'Whatever you think, that you will be. If you think yourself weak, weak you will be; if you think yourself strong, you will be.'",
    "- Buddha": "'Peace comes from within. Do not seek it without.'",
    "- Sardar Patel": "'Faith is of no evil in the absence of strength. Faith and strength, both are essential to accomplish any great work.'",
    "- Mahatma Gandhi": "'You may never know what results come of your actions, but if you do nothing, there will be no result.'",
    "- Rabindranath Tagore": "'Reach high, for stars lie hidden in your soul. Dream deep, for every dream precedes the goal.'"
};

quoteBtn.addEventListener("click", randomQuote);

function randomQuote() {
  generate();
}

function generate() {
  const authors = Object.keys(quotes);
  const author = authors[Math.floor(Math.random() * authors.length)];
  const quote = quotes[author];

  quoteText.textContent = quote;
  document.querySelector("#author").textContent = author;
}

window.onload = function () {
  generate();
}

//for copying the qoute to clipboard
const copyBtn = document.querySelector(".copy");

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.value = quoteText.textContent;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Quote copied to clipboard!");
});


