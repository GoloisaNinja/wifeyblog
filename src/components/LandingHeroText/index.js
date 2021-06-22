import React from 'react';
import {
	HeroWrapper,
	HeroTextWrapper,
	HeroImageWrapper,
	HeroButton,
} from './styles';
import { HeroImage } from '../HeroImage';

export function LandingHeroText() {
	return (
		<HeroWrapper>
			<HeroTextWrapper>
				<h1>Pretty Killer Blog</h1>
				<h4>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
					maiores et repudiandae ipsa aut provident doloribus nisi velit! Omnis,
					ea officiis expedita perferendis aspernatur veritatis! Vero in ipsam
					odio perferendis!
				</h4>
				<HeroButton>About Me</HeroButton>
			</HeroTextWrapper>
			<HeroImageWrapper>
				<HeroImage />
			</HeroImageWrapper>
		</HeroWrapper>
	);
}
