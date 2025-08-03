/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	await knex("emails").del();

	const emailAddresses = [
		"james@gmail.com",
		"john.doe@yahoo.com",
		"mohandas@apple.io",
		"henry@outlook.com",
		"miro@mail.you",
		"unknown@gmail.com",
		"malita.dumbadze@gmail.com",
		"ghorjomeladzeroma@gmail.com",
		"reply@materials.com",
		"test@test.test",
		"jobs@apple.com",
		"michel@jordan.io",
	];

	const getRandomEmailAddress = () => {
		const randomIdx = +((emailAddresses.length - 1) * Math.random()).toFixed();
		return emailAddresses[randomIdx];
	};

	const getMultipleAddresses = () => {
		const count = +(3 * Math.random()).toFixed();
		const emails = [];
		for (let idx = 0; idx < count; idx++) {
			emails.push(getRandomEmailAddress());
		}
		return emails.join(" ").trim() || null;
	};

	const emails = [
		{
			subject: "1. Simplicity Wins",
			body: `"Simplicity is the ultimate sophistication." – Leonardo da Vinci`,
		},
		{
			subject: "2. Start Before You're Ready",
			body: `"Do not wait for the perfect moment, take the moment and make it perfect." – Unknown`,
		},
		{
			subject: "3. The Power of Purpose",
			body: `"He who has a why to live can bear almost any how." – Friedrich Nietzsche`,
		},
		{
			subject: "4. Quiet Strength",
			body: `"Be like a duck. Calm on the surface, but paddling like hell underneath." – Michael Caine`,
		},
		{
			subject: "5. Begin Anywhere",
			body: `"Begin, be bold, and venture to be wise." – Horace`,
		},
		{
			subject: "6. Reflection Matters",
			body: `"The unexamined life is not worth living." – Socrates`,
		},
		{
			subject: "7. Trust the Process",
			body: `"It always seems impossible until it’s done." – Nelson Mandela`,
		},
		{
			subject: "8. The Value of Time",
			body: `"Lost time is never found again." – Benjamin Franklin`,
		},
		{
			subject: "9. Growth Through Challenge",
			body: `"The obstacle is the way." – Marcus Aurelius`,
		},
		{
			subject: "10. Stay Curious",
			body: `"Judge a man by his questions rather than by his answers." – Voltaire`,
		},
		{
			subject: "11. Balance",
			body: `"Everything in moderation, including moderation." – Oscar Wilde`,
		},
		{
			subject: "12. Clarity over Complexity",
			body: `"Any fool can make something complicated. It takes a genius to make it simple." – Woody Guthrie`,
		},
		{
			subject: "13. Just Keep Going",
			body: `"It does not matter how slowly you go as long as you do not stop." – Confucius`,
		},
		{
			subject: "14. Own the Day",
			body: `"The best way to predict the future is to create it." – Peter Drucker`,
		},
		{
			subject: "15. The Present is Power",
			body: `"You must live in the present, launch yourself on every wave." – Henry David Thoreau`,
		},
		{
			subject: "16. See the Opportunity",
			body: `"In the middle of difficulty lies opportunity." – Albert Einstein`,
		},
		{
			subject: "17. Act with Intention",
			body: `"Well done is better than well said." – Benjamin Franklin`,
		},
		{
			subject: "18. Stay Humble, Stay Hungry",
			body: `"The only true wisdom is in knowing you know nothing." – Socrates`,
		},
		{
			subject: "19. Flow with the River",
			body: `"You cannot step into the same river twice." – Heraclitus`,
		},
		{
			subject: "20. Create, Don’t Wait",
			body: `"The way to get started is to quit talking and begin doing." – Walt Disney`,
		},
		{
			subject: "21. Live Your Questions",
			body: `"Live the questions now. Perhaps then, someday far in the future, you will gradually, without even noticing it, live your way into the answer." – Rainer Maria Rilke`,
		},
		{
			subject: "22. Become Who You Are",
			body: `"Become who you are." – Friedrich Nietzsche`,
		},
		{
			subject: "23. The Beginning is Half of the Whole",
			body: `"Well begun is half done." – Aristotle`,
		},
		{
			subject: "24. Know Thyself",
			body: `"Knowing yourself is the beginning of all wisdom." – Aristotle`,
		},
		{
			subject: "25. Embrace Uncertainty",
			body: `"Uncertainty is an uncomfortable position. But certainty is an absurd one." – Voltaire`,
		},
		{
			subject: "26. Let It Go",
			body: `"Attachment is the root of suffering." – The Buddha`,
		},
		{
			subject: "27. What You Do Matters",
			body: `"Act as if what you do makes a difference. It does." – William James`,
		},
		{
			subject: "28. Think Less, Do More",
			body: `"To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking." – Goethe`,
		},
		{
			subject: "29. Harmony Over Noise",
			body: `"Silence is a source of great strength." – Lao Tzu`,
		},
		{
			subject: "30. Time is a River",
			body: `"Time is a river in which I go fishing." – Thoreau`,
		},
		{
			subject: "31. Focus on What You Control",
			body: `"You have power over your mind—not outside events. Realize this, and you will find strength." – Marcus Aurelius`,
		},
		{
			subject: "32. Do One Thing Well",
			body: `"It is better to do one thing well than many things badly." – Socrates (paraphrased)`,
		},
		{
			subject: "33. The Path is Made by Walking",
			body: `"Traveler, there is no path. The path is made by walking." – Antonio Machado`,
		},
		{
			subject: "34. Nature Doesn’t Hurry",
			body: `"Nature does not hurry, yet everything is accomplished." – Lao Tzu`,
		},
		{
			subject: "35. Desire Less",
			body: `"He who is not satisfied with a little is satisfied with nothing." – Epicurus`,
		},
		{
			subject: "36. Be the Change",
			body: `"Be the change that you wish to see in the world." – Mahatma Gandhi`,
		},
		{
			subject: "37. You Are Not Your Thoughts",
			body: `"You are not your thoughts. You are the awareness behind them." – Eckhart Tolle`,
		},
		{
			subject: "38. Risk is Necessary",
			body: `"A ship is safe in harbor, but that’s not what ships are for." – John A. Shedd`,
		},
		{
			subject: "39. Don't Just Exist",
			body: `"Don’t live the same year 75 times and call it a life." – Robin Sharma`,
		},
		{
			subject: "40. The Power of Attention",
			body: `"We are what we repeatedly do. Excellence, then, is not an act, but a habit." – Aristotle`,
		},
		{
			subject: "41. Don't Fear Death",
			body: `"It is not death that a man should fear, but never beginning to live." – Marcus Aurelius`,
		},
		{
			subject: "42. Learn to Let Go",
			body: `"The things you own end up owning you." – Chuck Palahniuk (Fight Club)`,
		},
		{
			subject: "43. Freedom is Found Inside",
			body: `"Man is free at the moment he wishes to be." – Voltaire`,
		},
		{
			subject: "44. Accept What Is",
			body: `"Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not." – Epictetus`,
		},
		{
			subject: "45. Challenge Brings Growth",
			body: `"Smooth seas do not make skillful sailors." – African Proverb`,
		},
		{
			subject: "46. Think Before Speaking",
			body: `"Better to remain silent and be thought a fool than to speak and remove all doubt." – Abraham Lincoln`,
		},
		{
			subject: "47. Practice Gratitude",
			body: `"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has." – Epictetus`,
		},
		{
			subject: "48. Live Simply",
			body: `"The greatest wealth is to live content with little." – Plato`,
		},
		{
			subject: "49. Fear Less, Live More",
			body: `"Too many people are thinking of security instead of opportunity." – James F. Byrnes`,
		},
		{
			subject: "50. Be Present",
			body: `"Wherever you are, be all there." – Jim Elliot`,
		},
	];

	const records = emails.map((email) => ({
		to: getRandomEmailAddress(),
		cc: getMultipleAddresses(),
		bcc: getMultipleAddresses(),
		subject: email.subject,
		body: email.body,
		created_at: new Date(),
		updated_at: new Date(),
	}));

	await knex("emails").insert(records);
}
