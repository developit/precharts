export const PropTypes = () => PropTypes;
export default PropTypes;
'isRequired element func number shape oneOf oneOfType arrayOf arrayOfType'.split(' ').forEach( type => {
	PropTypes[type] = PropTypes;
});
