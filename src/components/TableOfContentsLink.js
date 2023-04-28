import React from "react";

function TableOfContentsLink(props) {
  const { heading, activeId } = props;
  return (
    <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
      <a
        className="toc-link"
        href={`#${heading.id}`}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(`#${heading.id}`).scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {heading.title}
      </a>
      {heading.items != null && heading.items.length > 0 && (
        <ul>
          {heading.items.map((child) => (
            <TableOfContentsLink key={child.id} heading={child} activeId={activeId} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default TableOfContentsLink;
