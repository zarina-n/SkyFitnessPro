export const getUserWorkouts = (allWorkouts, course) => {
  const userWorkouts = []

  for (let i = 0; i < allWorkouts.length; i++) {
    course[0].workout.map((workout) =>
      workout === allWorkouts[i]._id ? userWorkouts.push(allWorkouts[i]) : ''
    )
  }

  return userWorkouts
}

export const doNotAddCourse = (userCoursesList, course) => {
  const existingCourses = []

  let existingCourse
  for (const key in userCoursesList) {
    existingCourse = userCoursesList[key].pathName

    existingCourses.push(existingCourse)
  }
  console.log(userCoursesList)

  console.log(existingCourses.includes(course[0].pathName))

  return existingCourses.includes(course[0].pathName)
}
