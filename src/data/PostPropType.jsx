import PropTypes from "prop-types";

const AuthorPropTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const CategoryPropTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      description: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const PostInfoPropTypes = {
  id: PropTypes.number.isRequired,
  postDate: PropTypes.string.isRequired,
  postTime: PropTypes.string,
  author: PropTypes.shape(AuthorPropTypes).isRequired,
};

const FeaturedImagePropTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        alternativeText: PropTypes.string,
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const PostAttributesPropTypes = {
  postTitle: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  postExcerpt: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape(FeaturedImagePropTypes).isRequired,
  postInfo: PropTypes.shape(PostInfoPropTypes).isRequired,
  category: PropTypes.shape(CategoryPropTypes).isRequired,
};

const PaginationPropTypes = {
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

const MetaPropTypes = {
  pagination: PropTypes.shape(PaginationPropTypes).isRequired,
};

export const PostPropTypes = {
  id: PropTypes.number.isRequired,
  attributes: PropTypes.shape(PostAttributesPropTypes).isRequired,
};

const ResponsePropTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(PostPropTypes)).isRequired,
  meta: PropTypes.shape(MetaPropTypes).isRequired,
};

export default ResponsePropTypes;
