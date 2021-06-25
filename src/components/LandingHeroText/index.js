import React from 'react';
import { HeroWrapper, HeroTextWrapper, HeroImageWrapper } from './styles';
import { Button } from '../Button';
import { HeroImage } from '../HeroImage';
import { GradientH1, GradientH4 } from '../GradientText';

export function LandingHeroText() {
	return (
		<HeroWrapper>
			<HeroTextWrapper>
				<GradientH1
					font={"'Alfa Slab One', cursive"}
					color={'#ff0a78, #5773ff'}>
					Pretty Killer Blog
				</GradientH1>
				<div>
					<GradientH4
						font={"'Alfa Slab One', cursive"}
						color={'#ff0a78, #5773ff'}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						maiores et repudiandae ipsa aut provident doloribus nisi velit!
						Omnis, ea officiis expedita perferendis aspernatur veritatis! Vero
						in ipsam odio perferendis!
					</GradientH4>
				</div>
				<Button mt={'35px'} location={'frontpage'}>
					About Me
				</Button>
			</HeroTextWrapper>
			<HeroImageWrapper>
				<HeroImage />
			</HeroImageWrapper>
		</HeroWrapper>
	);
}
