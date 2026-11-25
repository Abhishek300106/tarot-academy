import type { CardLesson } from "@/types/lesson";

export const fiveOfCups: CardLesson = {
  slug: "five-of-cups",
  readingTime: "About 12 minutes",
  numberTheme: "Five: disruption",
  subtitle:
    "Grief, regret and the question of where you are looking. This card is less about the loss itself than about what stays unseen while we mourn it.",
  remember:
    "The Five of Cups acknowledges a real loss, then asks what you are not looking at. It describes where attention is fixed right now. It does not predict lasting sorrow.",

  intro: {
    coreTheme: "Grief and regret, and the choice of where to look next.",
    paragraphs: [
      "The Five of Cups shows a figure in a dark cloak with a bowed head, standing before three cups that have toppled over and spilled. Behind the figure, mostly out of sight, two other cups still stand upright. Further back, a river runs beneath a bridge that leads toward a house.",
      "In the Minor Arcana, each suit describes an area of life and each number describes a stage in a cycle. Cups belong to water: feelings, relationships and the inner life. Five sits at the middle of the ten-card journey, the point where the steadiness of Four breaks and something has to change. Put together, the Five of Cups is the moment after an emotional disruption, when the heart is busy counting what it cost.",
      "This is why the card is so easy to misread. It is not a card of disaster. It is a card of attention. It shows where someone is looking, and quietly suggests there is more in the picture.",
    ],
  },

  symbolism: [
    {
      title: "The dark cloak",
      meaning:
        "Mourning, privacy and withdrawal. The figure’s face is hidden, which suggests feelings that are being carried alone.",
      inReading:
        "Ask whether the person is processing privately or hiding the feeling from others, and from themselves.",
    },
    {
      title: "Three spilled cups",
      meaning:
        "Loss that has already happened. The cups have tipped over, so there is nothing left to hold in them. They sit in front of the figure, which is why they fill the whole view.",
      inReading:
        "Notice what the person talks about first and longest. That is usually the spilled cups.",
    },
    {
      title: "Two standing cups",
      meaning:
        "What remains. They are fewer than the spilled cups and they are behind the figure, outside its line of sight. They are real, but only visible to someone who turns around.",
      inReading:
        "These stand for people, skills, options and memories that are still available. Ask what is still standing.",
    },
    {
      title: "The river",
      meaning:
        "Water is emotion, and a river is emotion in motion. It keeps flowing whether or not the figure moves. It also lies between the figure and shelter.",
      inReading:
        "Grief changes over time. The river is a reminder that this feeling is not fixed.",
    },
    {
      title: "The bridge and the house",
      meaning:
        "A way back to shelter, routine and company. The path exists whether or not the figure is ready to take it.",
      inReading:
        "The card does not hurry anyone across. It only shows that the crossing is possible.",
    },
    {
      title: "The grey sky and bare ground",
      meaning:
        "The mood of this moment. It is a description of the present weather, not a forecast.",
      inReading:
        "Decks differ in the small details, but loss in front and what remains behind is nearly universal.",
    },
  ],

  upright: {
    summary: "Grief, regret, disappointment, and attention narrowed to what was lost.",
    paragraphs: [
      "Upright, the card acknowledges that something hurt and that the feeling is legitimate. It might be a relationship ending, a plan failing or a hope that never arrived. The card does not judge the sorrow, and it does not tell anyone to hurry past it.",
      "It also names a pattern. When we grieve, attention narrows. The three spilled cups become the whole picture. The Five of Cups notices what the person is focused on and asks, without pressure, whether that is everything there is.",
      "A good reader holds both ideas together: first validate the loss, then widen the view.",
    ],
    keyPoints: [
      "Grief or disappointment that is real and deserves space",
      "Regret, and replaying what could have been done differently",
      "Attention fixed on the loss while resources go unnoticed",
      "Healing is possible, but not yet begun or not yet chosen",
    ],
    commonMisreading:
      "Reading it as “you are about to lose something.” Most of the time the card describes a loss that has already happened emotionally, and how someone is relating to it.",
  },

  reversed: {
    summary: "Two possible directions: recovery begins, or grief gets stuck.",
    interpretations: [
      {
        title: "Turning around",
        text: "Acceptance starts. The figure finally notices the two standing cups, and grief softens into perspective. This can show forgiveness, relief, or a first step toward the bridge.",
      },
      {
        title: "Getting stuck",
        text: "The reversed card can also show grief that was never processed: bottled up, avoided or replayed endlessly. The cloak is pulled tighter instead of loosened.",
      },
      {
        title: "Holding on to resentment",
        text: "Sometimes the spilled cups are not only mourned but guarded. The person may keep the hurt alive because letting it go feels like saying it did not matter.",
      },
    ],
    howToTell:
      "Use the question and the neighbouring cards. A reversed Five of Cups beside the Star or Temperance leans toward recovery. Beside the Eight of Swords or the Moon, it often points to being trapped in worry. Listen to how the person talks: new questions about next steps suggest movement, while the same story retold the same way suggests a loop.",
    note: "Not every reader uses reversals. If you do not, the upright card can carry both movements, and you can ask which one fits.",
  },

  love: {
    paragraphs: [
      "In relationships, the Five of Cups often appears after a breakup, a betrayal or a quiet disappointment. It shows someone still standing among the spilled cups: replaying conversations, wondering what they should have said, mourning the future they imagined as much as the person.",
      "In a continuing relationship, it is subtler. It can point to a disappointment that has not been spoken, an expectation that was not met or a hurt that was never repaired. It does not say the relationship is over. It asks whether one partner is focused on what is missing while overlooking what is still good.",
    ],
    contexts: [
      {
        label: "After a breakup",
        reading:
          "Validation first. The card describes the grief, and the standing cups may be friendships, self-respect or the lessons learned.",
      },
      {
        label: "In a long relationship",
        reading:
          "Look for an unspoken disappointment. The card invites a conversation rather than a verdict.",
      },
      {
        label: "As another person’s feelings",
        reading:
          "Be cautious. It may show someone who is emotionally unavailable because they are grieving something else.",
      },
    ],
  },

  career: {
    paragraphs: [
      "At work, the Five of Cups usually follows a disappointment: a promotion that went to someone else, a layoff, a launch that failed, or a role that did not turn out as imagined. The sting is acknowledged first.",
      "The two standing cups are often transferable skills, a professional network, experience gained and other opportunities. The card asks for an honest inventory, not for denial of the loss. It is not a money card, so for financial outcomes look to the neighbouring Pentacles.",
    ],
    contexts: [
      {
        label: "After a layoff",
        reading:
          "Grief and a bruised sense of identity. The standing cups are skills and people that do not disappear with the job.",
      },
      {
        label: "A missed promotion",
        reading:
          "Disappointment that may be tangled with resentment. The card asks what the person actually wanted from the role.",
      },
      {
        label: "Considering a career change",
        reading:
          "It can show regret about time already invested. The useful question is what is still worth keeping, not whether the time was wasted.",
      },
    ],
  },

  growth: {
    paragraphs: [
      "Personal growth is where the Five of Cups teaches best. It describes our relationship with our own regret. Growth does not mean pretending the loss did not matter. It means letting it be real while refusing to let it become the only story told about a life.",
      "The card also hints at a sequence of healing: acknowledge, feel, then look up. Many people skip the first two steps and wonder why the third does not work.",
    ],
    contexts: [
      {
        label: "Self-blame",
        reading:
          "Regret can harden into harsh self-judgment. The card asks for compassion toward the person who made that choice with the information they had.",
      },
      {
        label: "Old losses resurfacing",
        reading:
          "A new disappointment can wake an older one. The figure may be mourning more than the present event.",
      },
      {
        label: "Learning to look up",
        reading:
          "Turning toward the standing cups is a practice, not a single decision. It can be done gently and in small steps.",
      },
    ],
  },

  examples: [
    {
      title: "The declined job offer",
      scenario:
        "Maya turned down a job offer after weeks of thought. Months later, the team announced a successful launch, and she finds herself thinking about it every day.",
      question: "“Did I make the wrong decision?”",
      reading:
        "The Five of Cups shows where her attention is: on a path she imagined and did not take. The two standing cups are her current role’s real strengths, the flexibility and the manager she trusted when she chose to stay. The card does not say she was right or wrong. It says that regret is taking up more room than the facts justify.",
      takeaway:
        "The card can describe a feeling without ruling on the decision behind it.",
    },
    {
      title: "The friendship that faded",
      scenario:
        "Sam keeps rereading old messages from a close friend he has drifted away from, and cannot decide whether to reach out.",
      question: "“Is there any point in contacting them?”",
      reading:
        "The card points to grief that has not found a place to go, rather than a verdict on reconciliation. A careful reader acknowledges that the friendship mattered, then asks what Sam wants from reaching out: repair, closure or simply relief. The standing cups may be other friendships and the good memories themselves. A clarifying card can help with the practical question.",
      takeaway:
        "When a card names feeling, do not force it to answer a yes or no question on its own.",
    },
    {
      title: "The same card in two positions",
      scenario:
        "Daniel draws the Five of Cups in the “challenge” position of a three-card spread about a stalled project. A friend later draws it in the “advice” position for her own question about a breakup.",
      question: "“What is blocking me?” and “What should I do?”",
      reading:
        "For Daniel, the card is a challenge: attention is stuck on what went wrong, and that is blocking the next step. For the friend, in the advice position, it reads as permission: let the grief be acknowledged rather than rushed, and then look at what remains. The card is the same, but the position changes its job.",
      takeaway:
        "Position and question decide whether the card describes, warns or advises.",
    },
  ],

  questions: [
    {
      question: "“Why do I still feel so stuck after the breakup?”",
      suggests:
        "The card nearly describes the situation itself: attention fixed on what was lost. Read it as validation and an invitation to ask what is still standing.",
      context:
        "In the present position it describes the current state. Beside the Eight of Swords, it can suggest feeling trapped.",
    },
    {
      question: "“Should I try to get that job back?”",
      suggests:
        "The card alone is not a yes or a no. It suggests the question may be coming from loss rather than a clear look at the situation. Help the person separate wanting the job from wanting relief from regret.",
      context:
        "A clarifying card, or a card for “what do I really want,” will say far more than the Five of Cups can.",
    },
    {
      question: "“Will I ever feel happy again?”",
      suggests:
        "Handle gently. The card is not a forecast of permanent sorrow, and the bridge and house show a way back. Reflect that the feeling is real and that it is not the whole story.",
      context:
        "In the future position, be careful: it may only describe a disappointment to prepare for, never doom.",
    },
    {
      question: "“What am I not seeing about this situation?”",
      suggests:
        "This is the card’s ideal question. It points straight at the two standing cups: what remains, and what the person has been looking past.",
      context:
        "Pair it with a card or two in the other positions to name what, specifically, is being overlooked.",
    },
  ],

  response: {
    energy: "Compassionate, steady and honest",
    paragraphs: [
      "The energy of the Five of Cups is that of a friend sitting next to someone who is grieving. It does not rush, lecture or minimise. The best response has two parts: acknowledge what was lost, then invite a wider view.",
      "In practice, that sounds like: “This hurt, and it makes sense that it is on your mind. What else is still here?” Avoid “everything happens for a reason” and “just move on.” They skip the first step, and people usually stop listening when they hear them.",
    ],
    contextShifts: [
      {
        context: "In the past position",
        shift:
          "The loss has already happened. Name it, and look at how far its echo still reaches.",
      },
      {
        context: "In the present position",
        shift:
          "The person is in the middle of grieving. Keep the tone supportive and do not skip ahead.",
      },
      {
        context: "In the advice or outcome position",
        shift:
          "It can mean “allow yourself to grieve,” or it can warn against dwelling. Let the question and the person’s own words decide.",
      },
      {
        context: "In the future position",
        shift:
          "Frame it as an emotional letdown to prepare for, never as a prediction of tragedy.",
      },
      {
        context: "Next to other cards",
        shift:
          "Beside Cups, it often links to relationships or memories. Beside Swords, it can suggest rumination. Beside Pentacles, the loss may be practical or financial.",
      },
    ],
    avoid:
      "Avoid turning this card into a prediction of tragedy, or telling someone to “just move on.”",
  },

  practice: {
    title: "Name the cups",
    intro:
      "This exercise trains you to read both halves of the card: what was lost and what remains. Use an invented scenario if a real one feels too raw.",
    steps: [
      "Choose a disappointment, real or imagined: a missed opportunity, an ended friendship or a plan that changed.",
      "Write three short lines for the spilled cups. What exactly was lost? Be specific.",
      "Write two short lines for the standing cups. What remains? Be honest. They do not need to equal what was lost.",
      "Write one sentence you could say to someone in this position that acknowledges the loss before pointing to what remains.",
    ],
    reflection:
      "Which was harder: naming the loss or naming what remains? Many readers find they lean one way. Knowing your own tendency helps you stay balanced when reading for others.",
  },

  quiz: [
    {
      question: "What do the two upright cups behind the figure most often represent?",
      options: [
        "Future disasters the figure should fear",
        "What remains available, though not yet noticed",
        "Two people who have abandoned the figure",
        "Money problems",
      ],
      correctIndex: 1,
      explanation:
        "The standing cups sit behind the figure, out of sight. They stand for resources, people and options that still exist and have not been noticed.",
    },
    {
      question:
        "A client asks, “Should I try to get that job back?” and draws the Five of Cups. What is the best first response?",
      options: [
        "Say yes, because the card shows what was lost",
        "Say no, because the card is a negative one",
        "Acknowledge the disappointment, then explore whether she wants the job or relief from regret, and consider a clarifying card",
        "Tell her to move on right away",
      ],
      correctIndex: 2,
      explanation:
        "The card names a feeling and a focus of attention rather than answering a yes or no question. Validating the loss first and then clarifying the real question respects both the card and the person.",
    },
    {
      question:
        "Which is the strongest sign that a reversed Five of Cups leans toward recovery rather than being stuck?",
      options: [
        "It sits beside the Eight of Swords and the Moon",
        "It sits beside the Star or Temperance, and the person is asking about next steps",
        "The person repeats the same story with no new questions",
        "It appears in the past position",
      ],
      correctIndex: 1,
      explanation:
        "Supportive neighbouring cards and forward-looking questions suggest movement. Repeating the same story and anxious neighbours point to a loop.",
    },
    {
      question: "Why is it a mistake to read the Five of Cups as a prediction of future tragedy?",
      options: [
        "Because Cups cards never say anything about the future",
        "Because it only appears in love readings",
        "Because it mostly describes an emotional state and a focus of attention that already exist",
        "Because the cups in the picture are full",
      ],
      correctIndex: 2,
      explanation:
        "The loss in the picture has already happened. The card’s main teaching is about how someone relates to it and what they might be overlooking.",
    },
  ],
};