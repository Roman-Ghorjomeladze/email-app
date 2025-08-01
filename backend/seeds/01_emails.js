/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	await knex("emails").del();

	const emails = [
		{
			to: "user1@example.com",
			subject: "1. Simplicity Wins",
			body: `"Simplicity is the ultimate sophistication." – Leonardo da Vinci`,
		},
		{
			to: "user2@example.com",
			subject: "2. Start Before You're Ready",
			body: `"Do not wait for the perfect moment, take the moment and make it perfect." – Unknown`,
		},
		{
			to: "user3@example.com",
			subject: "3. The Power of Purpose",
			body: `"He who has a why to live can bear almost any how." – Friedrich Nietzsche`,
		},
		{
			to: "user4@example.com",
			subject: "4. Quiet Strength",
			body: `"Be like a duck. Calm on the surface, but paddling like hell underneath." – Michael Caine`,
		},
		{
			to: "user5@example.com",
			subject: "5. Begin Anywhere",
			body: `"Begin, be bold, and venture to be wise." – Horace`,
		},
		{
			to: "user6@example.com",
			subject: "6. Reflection Matters",
			body: `"The unexamined life is not worth living." – Socrates`,
		},
		{
			to: "user7@example.com",
			subject: "7. Trust the Process",
			body: `"It always seems impossible until it’s done." – Nelson Mandela`,
		},
		{
			to: "user8@example.com",
			subject: "8. The Value of Time",
			body: `"Lost time is never found again." – Benjamin Franklin`,
		},
		{
			to: "user9@example.com",
			subject: "9. Growth Through Challenge",
			body: `"The obstacle is the way." – Marcus Aurelius`,
		},
		{
			to: "user10@example.com",
			subject: "10. Stay Curious",
			body: `"Judge a man by his questions rather than by his answers." – Voltaire`,
		},
		{
			to: "user11@example.com",
			subject: "11. Balance",
			body: `"Everything in moderation, including moderation." – Oscar Wilde`,
		},
		{
			to: "user12@example.com",
			subject: "12. Clarity over Complexity",
			body: `"Any fool can make something complicated. It takes a genius to make it simple." – Woody Guthrie`,
		},
		{
			to: "user13@example.com",
			subject: "13. Just Keep Going",
			body: `"It does not matter how slowly you go as long as you do not stop." – Confucius`,
		},
		{
			to: "user14@example.com",
			subject: "14. Own the Day",
			body: `"The best way to predict the future is to create it." – Peter Drucker`,
		},
		{
			to: "user15@example.com",
			subject: "15. The Present is Power",
			body: `"You must live in the present, launch yourself on every wave." – Henry David Thoreau`,
		},
		{
			to: "user16@example.com",
			subject: "16. See the Opportunity",
			body: `"In the middle of difficulty lies opportunity." – Albert Einstein`,
		},
		{
			to: "user17@example.com",
			subject: "17. Act with Intention",
			body: `"Well done is better than well said." – Benjamin Franklin`,
		},
		{
			to: "user18@example.com",
			subject: "18. Stay Humble, Stay Hungry",
			body: `"The only true wisdom is in knowing you know nothing." – Socrates`,
		},
		{
			to: "user19@example.com",
			subject: "19. Flow with the River",
			body: `"You cannot step into the same river twice." – Heraclitus`,
		},
		{
			to: "user20@example.com",
			subject: "20. Create, Don’t Wait",
			body: `"The way to get started is to quit talking and begin doing." – Walt Disney`,
		},
		{
			to: "user21@example.com",
			subject: "21. Live Your Questions",
			body: `"Live the questions now. Perhaps then, someday far in the future, you will gradually, without even noticing it, live your way into the answer." – Rainer Maria Rilke`,
		},
		{
			to: "user22@example.com",
			subject: "22. Become Who You Are",
			body: `"Become who you are." – Friedrich Nietzsche`,
		},
		{
			to: "user23@example.com",
			subject: "23. The Beginning is Half of the Whole",
			body: `"Well begun is half done." – Aristotle`,
		},
		{
			to: "user24@example.com",
			subject: "24. Know Thyself",
			body: `"Knowing yourself is the beginning of all wisdom." – Aristotle`,
		},
		{
			to: "user25@example.com",
			subject: "25. Embrace Uncertainty",
			body: `"Uncertainty is an uncomfortable position. But certainty is an absurd one." – Voltaire`,
		},
		{
			to: "user26@example.com",
			subject: "26. Let It Go",
			body: `"Attachment is the root of suffering." – The Buddha`,
		},
		{
			to: "user27@example.com",
			subject: "27. What You Do Matters",
			body: `"Act as if what you do makes a difference. It does." – William James`,
		},
		{
			to: "user28@example.com",
			subject: "28. Think Less, Do More",
			body: `"To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking." – Goethe`,
		},
		{
			to: "user29@example.com",
			subject: "29. Harmony Over Noise",
			body: `"Silence is a source of great strength." – Lao Tzu`,
		},
		{
			to: "user30@example.com",
			subject: "30. Time is a River",
			body: `"Time is a river in which I go fishing." – Thoreau`,
		},
		{
			to: "user31@example.com",
			subject: "31. Focus on What You Control",
			body: `"You have power over your mind—not outside events. Realize this, and you will find strength." – Marcus Aurelius`,
		},
		{
			to: "user32@example.com",
			subject: "32. Do One Thing Well",
			body: `"It is better to do one thing well than many things badly." – Socrates (paraphrased)`,
		},
		{
			to: "user33@example.com",
			subject: "33. The Path is Made by Walking",
			body: `"Traveler, there is no path. The path is made by walking." – Antonio Machado`,
		},
		{
			to: "user34@example.com",
			subject: "34. Nature Doesn’t Hurry",
			body: `"Nature does not hurry, yet everything is accomplished." – Lao Tzu`,
		},
		{
			to: "user35@example.com",
			subject: "35. Desire Less",
			body: `"He who is not satisfied with a little is satisfied with nothing." – Epicurus`,
		},
		{
			to: "user36@example.com",
			subject: "36. Be the Change",
			body: `"Be the change that you wish to see in the world." – Mahatma Gandhi`,
		},
		{
			to: "user37@example.com",
			subject: "37. You Are Not Your Thoughts",
			body: `"You are not your thoughts. You are the awareness behind them." – Eckhart Tolle`,
		},
		{
			to: "user38@example.com",
			subject: "38. Risk is Necessary",
			body: `"A ship is safe in harbor, but that’s not what ships are for." – John A. Shedd`,
		},
		{
			to: "user39@example.com",
			subject: "39. Don't Just Exist",
			body: `"Don’t live the same year 75 times and call it a life." – Robin Sharma`,
		},
		{
			to: "user40@example.com",
			subject: "40. The Power of Attention",
			body: `"We are what we repeatedly do. Excellence, then, is not an act, but a habit." – Aristotle`,
		},
		{
			to: "user41@example.com",
			subject: "41. Don't Fear Death",
			body: `"It is not death that a man should fear, but never beginning to live." – Marcus Aurelius`,
		},
		{
			to: "user42@example.com",
			subject: "42. Learn to Let Go",
			body: `"The things you own end up owning you." – Chuck Palahniuk (Fight Club)`,
		},
		{
			to: "user43@example.com",
			subject: "43. Freedom is Found Inside",
			body: `"Man is free at the moment he wishes to be." – Voltaire`,
		},
		{
			to: "user44@example.com",
			subject: "44. Accept What Is",
			body: `"Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not." – Epictetus`,
		},
		{
			to: "user45@example.com",
			subject: "45. Challenge Brings Growth",
			body: `"Smooth seas do not make skillful sailors." – African Proverb`,
		},
		{
			to: "user46@example.com",
			subject: "46. Think Before Speaking",
			body: `"Better to remain silent and be thought a fool than to speak and remove all doubt." – Abraham Lincoln`,
		},
		{
			to: "user47@example.com",
			subject: "47. Practice Gratitude",
			body: `"He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has." – Epictetus`,
		},
		{
			to: "user48@example.com",
			subject: "48. Live Simply",
			body: `"The greatest wealth is to live content with little." – Plato`,
		},
		{
			to: "user49@example.com",
			subject: "49. Fear Less, Live More",
			body: `"Too many people are thinking of security instead of opportunity." – James F. Byrnes`,
		},
		{
			to: "user50@example.com",
			subject: "50. Be Present",
			body: `"Wherever you are, be all there." – Jim Elliot`,
		},
	];

	const cc = "you@jumbotron.io";
	const bcc = "";

	const records = emails.map((email) => ({
		to: email.to,
		cc,
		bcc,
		subject: email.subject,
		body: email.body,
		created_at: new Date(),
		updated_at: new Date(),
	}));

	await knex("emails").insert(records);
}
