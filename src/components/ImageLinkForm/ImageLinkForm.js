
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='ma4 mt0'>
			<p className='f3'>
				{'Insert an image url and the face will be detected.'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5 center'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
						onClick={onButtonSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;

// This Magic Brain will detect faces in your pictures. Give it a try. 