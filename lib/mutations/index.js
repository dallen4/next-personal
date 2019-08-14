import userMutations from './user';
import inviteMutations from './invite';
import postMutations from './post';

export default {
	...userMutations,
	...inviteMutations,
	...postMutations,
};
