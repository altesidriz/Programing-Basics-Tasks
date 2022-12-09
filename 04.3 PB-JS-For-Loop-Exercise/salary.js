function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;

    let cutoff = 0;

    for (let i = 1; i <= openTabs; i++) {
        let siteName = input[index];
        index++;
        if (siteName === 'Facebook') {
            cutoff = 150;
            salary -= cutoff;
        } else if (siteName === 'Instagram') {
            cutoff = 100;
            salary -= cutoff;
        } else if (siteName === 'Reddit') {
            cutoff = 50;
            salary -= cutoff;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}
salary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])

