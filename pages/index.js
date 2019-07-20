import Layout from "./components/layout";
import fetch from 'isomorphic-unfetch';
import renderHTML from 'react-render-html';

const Index = ( props ) => {

	console.warn( props );

	const { postData } = props;

	return (
		<Layout >
			{ postData && postData.map( item => (
				<div key={ item.id }>
					<h4>{ item.title.rendered }</h4>
					<div>{ renderHTML( item.content.rendered ) }</div>
				</div>
			) ) }
		</Layout>
	)
};

Index.getInitialProps = async () => {
	const res = await fetch( 'http://codeytek.com/wp-json/wp/v2/posts' );
	const posts = await res.json();

	return {
		postData: posts
	}

};

export default Index;
