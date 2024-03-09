const baseURL = "https://guinhosensei.github.io/wdd230/";
const linksURL = "https://guinhosensei.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    const activityLinks = document.getElementById("activity-links");
  
    weeks.lessons.forEach(lesson => {
      const lessonNumber = lesson.lesson;
      const lessonLinks = lesson.links;
  
      const lessonHeading = document.createElement("h3");
      lessonHeading.textContent = "Lesson " + lessonNumber;
      activityLinks.appendChild(lessonHeading);
  
      const lessonList = document.createElement("ul");
      lessonLinks.forEach(link => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
        listItem.appendChild(anchor);
        lessonList.appendChild(listItem);
      });
      activityLinks.appendChild(lessonList);
    });
  }
  