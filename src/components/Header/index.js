import React from 'react';
import { Logo } from '../Logo';
import { HeaderWrapper, LogoWrapper } from './styles';

export function Header() {
	return (
		<HeaderWrapper>
			<LogoWrapper>
				<Logo />
			</LogoWrapper>
		</HeaderWrapper>
	);
}
