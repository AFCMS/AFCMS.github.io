import {
	SiDiscord,
	SiElement,
	//SiFiverr,
	SiGithub,
	SiGitlab,
	SiGmail,
	SiMastodon,
	SiReddit,
	SiSketchfab,
	SiTwitter,
	SiYoutube,
} from "react-icons/si";
import Section from "../Section";
import SocialIcon from "../SocialIcon";
import SocialIconCopy from "../SocialIconCopy";

const SocialSection = () => {
	return (
		<Section id="social" className="mb-20">
			<div className="w-full px-6 pt-2 pb-6">
				<h1 className="font-bold text-blue-700">Social Links</h1>
				<div className="mx-2 mt-6 flex w-full flex-wrap gap-4">
					<SocialIcon
						icon={SiGmail}
						icon_color="#EA4332"
						link="mailto:afcm.contact@gmail.com"
						hover="afcm.contact@gmail.com"
					/>
					<SocialIcon
						icon={SiGithub}
						icon_color="#181717"
						link="https://github.com/AFCMS"
						hover="@AFCMS"
					/>
					<SocialIcon
						icon={SiGitlab}
						icon_color="#FCA121"
						link="https://gitlab.com/AFCMS"
						hover="@AFCMS"
					/>
					<SocialIconCopy
						icon={SiDiscord}
						icon_color="#5865F2"
						text="AFCM#9333"
						hover="AFCM#9333"
					/>
					<SocialIconCopy
						icon={SiElement}
						icon_color="#0DBD8B"
						text="@afcm:matrix.org"
						hover="@afcm:matrix.org"
					/>
					<SocialIcon
						icon={SiTwitter}
						icon_color="#1DA1F2"
						link="https://twitter.com/AFCM_Dev"
						hover="@AFCM_Dev"
					/>
					<SocialIcon
						icon={SiMastodon}
						icon_color="#3088D4"
						link="https://mastodon.social/web/@AFCM"
						hover="@AFCM@mastodon.social"
					/>
					<SocialIcon
						icon={SiSketchfab}
						icon_color="#1CAAD9"
						link="https://sketchfab.com/afcm.contact"
						hover="afcm.contact"
					/>
					<SocialIcon
						icon={SiYoutube}
						icon_color="#FF0000"
						link="https://www.youtube.com/channel/UCK0mMW2SlIb7X5pKi00ZcYw"
						hover="@AFCMS"
					/>
					<SocialIcon
						icon={SiReddit}
						icon_color="#FF4500"
						link="https://www.reddit.com/user/AFCMS"
						hover="u/AFCMS"
					/>
					{
						//TODO: eanble link again when account get enabled again
						/*
					<SocialIcon
						icon={SiFiverr}
						icon_color="#1DBF73"
						link="https://fiverr.com/afcm20"
						hover="afcm20"
					/>*/
					}
				</div>
			</div>
		</Section>
	);
};

export default SocialSection;