const Main = () => {
    return (
        <div className='main-wrapper'>
            <form action="" method="post" className='form'>
                <div>
                    <label for="name">Имя</label>
                    <input type="text" id="name" name="name" placeholder='Имя' required />
                </div>
                <div>
                    <label for="last-name">Фамилия</label>
                    <input type="text" id="last-tname" name="name" placeholder='Фамилия' required />
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label for="category">Категория</label>
                    <input type="text" id="category" name="category" list="categories" />
                    <datalist id="categories">
                        <option value="Категория 1"></option>
                        <option value="Категория 2"></option>
                        <option value="Категория 3"></option>
                    </datalist>
                </div>
                <div>
                    <textarea name="" id="" rows="5" minlength="10" required></textarea>
                </div>
                <div>
                    <p>Выберите изображение для своего аватара:</p>
                    <input type="file" name="avatar"/>
                    <input type="submit" value="Отправить"/>
                </div>
            </form>
        </div>
    )
}

export default Main;