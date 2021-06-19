import { Button, Typography } from '@material-ui/core';
import React from 'react';

export default function ResultsContainer({ classes }) {
	return (
		<div className={classes.resultsContainer}>
			<Typography variant="h5">Results</Typography>
			<div className={classes.bookContainer}>
				<div className={classes.bookHeader}>
					<div>
						<Typography variant="h5">Book Title</Typography>
						<Typography variant="caption">
							Published Date: 04/12/1991
						</Typography>
						<Typography variant="body1">Written By: John Doe</Typography>
					</div>
					<div>
						<Button
							variant="outlined"
							color="secondary"
							className={classes.resultButton}
						>
							View
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							className={classes.resultButton}
						>
							Save
						</Button>
					</div>
				</div>
				<div className={classes.bookDetails}>
					<div>
						<img src="https://via.placeholder.com/200" alt="" />
					</div>
					<div>
						<Typography variant="body2" className={classes.bookSummary}>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
							deserunt molestias veritatis corrupti sequi nulla, ipsum molestiae
							suscipit porro nemo asperiores laborum, id illo. Architecto, modi
							error. Perspiciatis dicta tempora voluptas accusamus veritatis
							laudantium eum repellat, vero cumque? Minima iusto modi rem
							possimus similique facere tenetur veritatis accusamus, eveniet
							excepturi aut. Error atque laborum quos? Unde laudantium non
							ducimus quos consequatur deserunt sed nisi deleniti, molestias
							quod cum quidem eaque, nostrum dolorem incidunt esse. Quaerat ab
							nesciunt voluptas enim quae excepturi, quibusdam sequi quod porro
							neque ea dolor. Corporis culpa velit voluptatum cumque voluptate
							nemo ea magnam voluptates dolorum eum!
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}
