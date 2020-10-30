export default function DateComponent({ dateString }) {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric'});
    return <time dateTime={dateString}>{formatter.format(date)}</time>

}