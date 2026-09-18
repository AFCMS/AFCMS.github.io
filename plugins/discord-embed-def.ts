import { APIContainerComponent, ComponentType, ButtonStyle, SeparatorSpacingSize } from "discord-api-types/v10";

export const emojiIds = {
	github: "1550543636557729823",
	steam: "1550541784260681729",
	youtube: "1550544833150586920",
} as const satisfies Record<string, string>;

const mainText = `## AFCMS • Portfolio
I'm a **Computer Science** student, working on and learning about **web**, **software** and **game development**.

Checkout my various projects and creations on this portfolio.`;

export const embed = {
	type: ComponentType.Container,
	components: [
		{
			type: ComponentType.Section,
			components: [
				{
					type: ComponentType.TextDisplay,
					content: mainText,
				},
			],
			accessory: {
				type: ComponentType.Button,
				label: "Open",
				url: "https://afcms.dev",
				style: ButtonStyle.Link,
			},
		},
		{
			type: ComponentType.Separator,
			divider: true,
			spacing: SeparatorSpacingSize.Small,
		},
		{
			type: ComponentType.ActionRow,
			components: [
				{
					type: ComponentType.Button,
					label: "GitHub",
					emoji: {
						id: emojiIds.github,
					},
					url: "https://github.com/AFCMS",
					style: ButtonStyle.Link,
				},
				{
					type: ComponentType.Button,
					label: "Steam",
					emoji: {
						id: emojiIds.steam,
					},
					url: "https://steamcommunity.com/id/AFCMS",
					style: ButtonStyle.Link,
				},
				{
					type: ComponentType.Button,
					label: "YouTube",
					emoji: {
						id: emojiIds.youtube,
					},
					url: "https://youtube.com/@AFCMS",
					style: ButtonStyle.Link,
				},
			],
		},
	],
} as const satisfies APIContainerComponent;
