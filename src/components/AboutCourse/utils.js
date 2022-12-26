export const getUserWorkouts = (allWorkouts, course) => {
  const userWorkouts = []

  for (let i = 0; i < allWorkouts.length; i++) {
    course[0].workout.map((workout) =>
      workout === allWorkouts[i]._id ? userWorkouts.push(allWorkouts[i]) : ''
    )
  }

  return userWorkouts
}

export const doNotAddCourse = (userCourses, course) => {
  const existingCourses = []

  let existingCourse
  for (const key in userCourses) {
    existingCourse = userCourses[key].pathName

    existingCourses.push(existingCourse)
  }

  return existingCourses.includes(course[0].pathName)
}
