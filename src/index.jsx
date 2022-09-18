import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/*
					 _ 	 _
				 /u@) (@\
	  nn		   Y
	  'Y 	_____H____
		 \V |	-['']- |___''
		 \ \| T'T'T  |___nn
		 | 	| | | |	 |	 UU
		 /``\ WALL.E`\
		/ /A \ 	/	 A  \
	 L______J L_____J

*/

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
