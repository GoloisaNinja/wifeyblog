import React from 'react';
import { HeroWrapper, HeroTextWrapper, HeroImageWrapper } from './styles';
import { Button } from '../Button';
import { HeroImage } from '../HeroImage';
import { GradientText } from '../GradientText';

export function LandingHeroText() {
	return (
		<HeroWrapper>
			<HeroTextWrapper>
				<GradientText
					font={"'Alfa Slab One', cursive"}
					color={'#ff0a78, #5773ff'}>
					<h1>Pretty Killer Blog</h1>
				</GradientText>
				<GradientText
					font={"'Alfa Slab One', cursive"}
					color={'#ff0a78, #5773ff'}>
					<div>
						<h4>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur maiores et repudiandae ipsa aut provident doloribus
							nisi velit! Omnis, ea officiis expedita perferendis aspernatur
							veritatis! Vero in ipsam odio perferendis!
						</h4>
					</div>
				</GradientText>
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
