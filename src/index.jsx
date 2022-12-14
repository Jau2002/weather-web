import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/* eslint-disable */
/* 	 			 _ 	 _
				 /u@) (@\
	  nn		   Y
	  'Y 	_____H____
		 \V |	-['']- |___''
		 \ \| T'T'T  |___nn
		 | 	| | | |	 |	 UU
		 /``\ WALL.E`\
		/ /A \ 	/	 A  \
	 L______J L_____J

/* eslint-enable */

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
