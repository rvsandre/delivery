import React from 'react';
import '../style.css';

function Header() {
	return (
		<header className='header'>
			<div className='toolbar'>
				<div>
					<span>Delivery</span>
				</div>
				<div>
					<button>Novo post</button>
					<span>img</span>
					<span>img 2</span>
				</div>
			</div>
		</header>
	);
}
export default Header;
