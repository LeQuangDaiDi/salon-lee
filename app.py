from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def default():
    return redirect(url_for('index'))

@app.route('/trang-chu')
def index():
    return render_template('home.html', homescroll="scrollToTop", homehover="stay-in-here")

@app.route('/dat-hen')
def schedule():
    return render_template('schedule.html', schedulescroll="scrollToTop", schedulehover="stay-in-here")

@app.route('/ve-chung-toi')
def about():
    return render_template('about.html', aboutscroll="scrollToTop", abouthover="stay-in-here")

@app.route('/bang-gia-dich-vu')
def service():
    return render_template('service.html', servicescroll="scrollToTop", servicehover="stay-in-here")

@app.route('/chinh-sach-bao-hanh')
def policy():
    return render_template('policy.html', policyscroll="scrollToTop", policyhover="stay-in-here")

@app.route('/chuong-trinh')
def program():
    return render_template('program.html', programscroll="scrollToTop", programhover="stay-in-here")

if __name__ == '__main__':
    app.run(port=80, host='127.0.0.1', debug=True)
